"use client";

import { useEffect, useId, useState } from "react";
import { profile } from "@/data/profile";
import { siteUrl } from "@/data/site";
import {
  contactSchema,
  flattenContactErrors,
  type ContactFieldErrors,
} from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

const initialValues = {
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
  website: "",
};

const formSubmitAction = `https://formsubmit.co/${profile.email}`;
const thankYouUrl = `${siteUrl}/?sent=1#contact`;

export function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1") {
      setStatus({
        kind: "success",
        message: "Thanks — I’ll get back to you.",
      });
    }
  }, []);

  function fieldId(name: string) {
    return `${formId}-${name}`;
  }

  function errorId(name: string) {
    return `${formId}-${name}-error`;
  }

  function update(name: keyof typeof initialValues, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      event.preventDefault();
      setErrors(flattenContactErrors(parsed.error));
      setStatus({
        kind: "error",
        message: "Please check the highlighted fields.",
      });
      return;
    }

    setStatus({ kind: "submitting" });
  }

  return (
    <form
      action={formSubmitAction}
      method="POST"
      noValidate
      onSubmit={onSubmit}
      className="relative rounded-2xl border border-border bg-background-card p-5 sm:p-6"
    >
      <input type="hidden" name="_next" value={thankYouUrl} />
      <input type="hidden" name="_subject" value="Portfolio contact" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id={fieldId("name")}
          name="name"
          errorId={errorId("name")}
          label="Name"
          autoComplete="name"
          required
          value={values.name}
          error={errors.name}
          onChange={(value) => update("name", value)}
        />
        <Field
          id={fieldId("email")}
          name="email"
          errorId={errorId("email")}
          label="Email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          error={errors.email}
          onChange={(value) => update("email", value)}
        />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Field
          id={fieldId("company")}
          name="company"
          errorId={errorId("company")}
          label="Company"
          autoComplete="organization"
          value={values.company}
          error={errors.company}
          onChange={(value) => update("company", value)}
        />
        <Field
          id={fieldId("subject")}
          name="subject"
          errorId={errorId("subject")}
          label="Subject"
          required
          value={values.subject}
          error={errors.subject}
          onChange={(value) => update("subject", value)}
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor={fieldId("message")}
          className="mb-1.5 block text-sm text-muted"
        >
          Message
        </label>
        <textarea
          id={fieldId("message")}
          name="message"
          required
          rows={6}
          value={values.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? errorId("message") : undefined}
          onChange={(event) => update("message", event.target.value)}
          className={cn(
            "w-full resize-y rounded-xl border bg-background px-3.5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-subtle",
            errors.message
              ? "border-red-400/60"
              : "border-border focus:border-accent/50",
          )}
        />
        {errors.message ? (
          <p id={errorId("message")} className="mt-1.5 text-xs text-red-300">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor={fieldId("website")}>Website</label>
        <input
          id={fieldId("website")}
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={status.kind === "submitting"}>
          {status.kind === "submitting" ? "Sending…" : "Send message"}
        </Button>
        <p className="text-xs text-subtle">
          Or email{" "}
          <a
            href={`mailto:${profile.email}`}
            className="text-muted underline-offset-2 hover:text-accent hover:underline"
          >
            {profile.email}
          </a>
        </p>
      </div>

      <div className="mt-4 min-h-6" aria-live="polite">
        {status.kind === "success" ? (
          <p className="text-sm text-accent">{status.message}</p>
        ) : null}
        {status.kind === "error" ? (
          <p className="text-sm text-red-300">{status.message}</p>
        ) : null}
      </div>
    </form>
  );
}

type FieldProps = {
  id: string;
  name: string;
  errorId: string;
  label: string;
  value: string;
  error?: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
  onChange: (value: string) => void;
};

function Field({
  id,
  name,
  errorId,
  label,
  value,
  error,
  required,
  type = "text",
  autoComplete,
  onChange,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm text-muted">
        {label}
        {required ? <span className="sr-only"> (required)</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          "h-11 w-full rounded-xl border bg-background px-3.5 text-sm text-foreground outline-none transition-colors",
          error
            ? "border-red-400/60"
            : "border-border focus:border-accent/50",
        )}
      />
      {error ? (
        <p id={errorId} className="mt-1.5 text-xs text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}
