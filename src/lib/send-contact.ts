import { profile } from "@/data/profile";
import type { ContactInput } from "@/lib/contact";

export type SendContactResult = {
  ok: boolean;
  message: string;
};

/**
 * Sends the contact form through a free provider that works on GitHub Pages.
 * Prefers Web3Forms when NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is set (250/month, no card).
 * Otherwise uses FormSubmit (no account). The first FormSubmit send asks you to
 * confirm ownership of the inbox.
 */
export async function sendContactMessage(
  input: ContactInput,
): Promise<SendContactResult> {
  if (input.website) {
    return { ok: true, message: "Thanks — I’ll get back to you." };
  }

  const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
  if (web3Key) {
    return sendViaWeb3Forms(input, web3Key);
  }

  return sendViaFormSubmit(input);
}

async function sendViaWeb3Forms(
  input: ContactInput,
  accessKey: string,
): Promise<SendContactResult> {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      name: input.name,
      email: input.email,
      company: input.company || "—",
      subject: `[Portfolio] ${input.subject}`,
      message: input.message,
    }),
  });

  const data = (await response.json()) as {
    success?: boolean;
    message?: string;
  };

  if (!response.ok || !data.success) {
    return {
      ok: false,
      message:
        data.message ||
        `The message could not be sent. Please email ${profile.email} instead.`,
    };
  }

  return { ok: true, message: "Thanks — I’ll get back to you." };
}

async function sendViaFormSubmit(
  input: ContactInput,
): Promise<SendContactResult> {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(profile.email)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: input.name,
        email: input.email,
        company: input.company || "—",
        message: input.message,
        _subject: `[Portfolio] ${input.subject}`,
        _template: "table",
        _captcha: "false",
        _honey: input.website ?? "",
      }),
    },
  );

  const data = (await response.json()) as {
    success?: boolean | string;
    message?: string;
  };

  const success = data.success === true || data.success === "true";
  const providerMessage = data.message?.trim() || "";

  if (!success) {
    if (/confirm|activat|inbox/i.test(providerMessage)) {
      return {
        ok: false,
        message:
          "FormSubmit sent a confirmation email to your inbox. Open it, click the link once, then submit the form again.",
      };
    }

    return {
      ok: false,
      message:
        providerMessage ||
        `The message could not be sent. Please email ${profile.email} instead.`,
    };
  }

  if (/confirm|activat/i.test(providerMessage)) {
    return {
      ok: true,
      message:
        "Check razasaeed135@gmail.com and confirm FormSubmit once. After that, new messages will arrive in your inbox.",
    };
  }

  return { ok: true, message: "Thanks — I’ll get back to you." };
}
