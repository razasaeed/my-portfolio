import { NextResponse } from "next/server";
import { Resend } from "resend";
import { profile } from "@/data/profile";
import {
  contactSchema,
  flattenContactErrors,
  type ContactInput,
} from "@/lib/contact";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

function getClientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function buildEmailText(input: ContactInput): string {
  return [
    `New message from the portfolio contact form`,
    ``,
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Company: ${input.company || "—"}`,
    `Subject: ${input.subject}`,
    ``,
    input.message,
  ].join("\n");
}

export async function POST(request: Request) {
  const limited = rateLimit(`contact:${getClientKey(request)}`);
  if (!limited.ok) {
    return NextResponse.json(
      {
        ok: false,
        message: "Too many messages from this network. Please try again later.",
      },
      { status: 429 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "The request body was not valid JSON." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please check the highlighted fields.",
        errors: flattenContactErrors(parsed.error),
      },
      { status: 422 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim() || profile.email;

  if (!apiKey || !from) {
    return NextResponse.json(
      {
        ok: false,
        code: "not_configured",
        message: `The contact form is not connected to email yet. Write to ${profile.email} instead.`,
      },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: parsed.data.email,
      subject: `[Portfolio] ${parsed.data.subject}`,
      text: buildEmailText(parsed.data),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          ok: false,
          message:
            "The message could not be sent. Please email me directly instead.",
        },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "The message could not be sent. Please email me directly instead.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Thanks — I’ll get back to you.",
  });
}
