"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, CircleAlert, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

/**
 * Contact form with client-side validation (React Hook Form + Zod) and a
 * matching server-side Zod schema at POST /api/contact.
 *
 * HONESTY NOTE: the endpoint validates and logs submissions, but no email /
 * CRM delivery is wired up yet. The UI states this plainly in the success
 * message rather than pretending a message was delivered. See README.md →
 * "Unfinished integrations".
 */

const inputBase =
  "h-11 w-full rounded-lg border bg-white px-3.5 text-sm text-ink shadow-[0_1px_2px_rgb(22_50_79/0.05)] outline-none transition-colors placeholder:text-muted focus-visible:border-teal-500";
const inputOk = "border-navy-200 hover:border-navy-300";
const inputErr = "border-red-400 bg-red-50/40";

export function ContactForm() {
  const [submitted, setSubmitted] = useState<{ name: string } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      topic: "general",
      message: "",
      company_site: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setServerError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const payload = (await response.json()) as {
        ok: boolean;
        message?: string;
        issues?: Record<string, string[]>;
      };

      if (!response.ok || !payload.ok) {
        if (payload.issues) {
          for (const [field, messages] of Object.entries(payload.issues)) {
            if (field in contactSchema.shape) {
              setError(field as keyof ContactFormValues, {
                type: "server",
                message: messages[0],
              });
            }
          }
        }
        setServerError(
          payload.message ??
            "Your message could not be submitted. Please review the form and try again.",
        );
        return;
      }

      setSubmitted({ name: values.name });
      reset();
    } catch {
      setServerError(
        "A network error prevented submission. Please try again, or contact CRMO directly at info@manualosteopaths.org.",
      );
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-teal-200 bg-teal-50 p-7 sm:p-8"
      >
        <span
          aria-hidden
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-teal-600 shadow-card"
        >
          <CheckCircle2 className="h-6 w-6" strokeWidth={2.2} />
        </span>
        <h2 className="mt-4 font-display text-2xl font-semibold text-navy-900">
          Thank you, {submitted.name.split(" ")[0]}.
        </h2>
        <p className="mt-3 leading-relaxed text-teal-900/85">
          Your message passed validation and was received by this preview
          website. <strong className="font-semibold">Important:</strong> email
          delivery is not yet connected on this preview — to ensure your inquiry
          reaches the college, please email{" "}
          <a
            href="mailto:info@manualosteopaths.org"
            className="rounded-sm font-semibold underline underline-offset-2"
          >
            info@manualosteopaths.org
          </a>{" "}
          directly until the mail service is enabled.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(null)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {serverError ? (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm text-red-800"
        >
          <CircleAlert className="mt-0.5 h-4.5 w-4.5 shrink-0" aria-hidden />
          {serverError}
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-semibold text-navy-800">
            Full name <span aria-hidden className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={cn(inputBase, errors.name ? inputErr : inputOk)}
            {...register("name")}
          />
          {errors.name ? (
            <p id="contact-name-error" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.name.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-semibold text-navy-800">
            Email address <span aria-hidden className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={cn(inputBase, errors.email ? inputErr : inputOk)}
            {...register("email")}
          />
          {errors.email ? (
            <p id="contact-email-error" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.email.message}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="contact-topic" className="mb-1.5 block text-sm font-semibold text-navy-800">
          Topic <span aria-hidden className="text-red-500">*</span>
        </label>
        <select
          id="contact-topic"
          aria-invalid={Boolean(errors.topic)}
          aria-describedby={errors.topic ? "contact-topic-error" : undefined}
          className={cn(inputBase, errors.topic ? inputErr : inputOk, "pr-8")}
          {...register("topic")}
        >
          <option value="general">General inquiry</option>
          <option value="membership">Membership application</option>
          <option value="verification">Verify a practitioner&rsquo;s registration</option>
          <option value="resources">Guidelines &amp; resources</option>
          <option value="other">Other</option>
        </select>
        {errors.topic ? (
          <p id="contact-topic-error" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
            {errors.topic.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold text-navy-800">
          Message <span aria-hidden className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={6}
          placeholder="How can the college help you? (minimum 20 characters)"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={cn(inputBase, "h-auto py-3", errors.message ? inputErr : inputOk)}
          {...register("message")}
        />
        {errors.message ? (
          <p id="contact-message-error" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot: invisible to humans, skipped by keyboard */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="contact-company-site">Company website (leave empty)</label>
        <input
          id="contact-company-site"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company_site")}
        />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-ink">
          <input
            type="checkbox"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "contact-consent-error" : undefined}
            className="mt-0.5 h-4.5 w-4.5 shrink-0 rounded border-navy-300 accent-teal-600"
            {...register("consent")}
          />
          <span>
            I agree that CRMO may use the information I provide to respond to my
            inquiry, as described in the{" "}
            <a href="/privacy" className="rounded-sm font-semibold text-teal-700 hover:text-teal-800">
              Privacy Policy
            </a>
            . <span aria-hidden className="text-red-500">*</span>
          </span>
        </label>
        {errors.consent ? (
          <p id="contact-consent-error" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
            {errors.consent.message}
          </p>
        ) : null}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4.5 w-4.5 animate-spin" strokeWidth={2.4} aria-hidden />
            Submitting…
          </>
        ) : (
          <>
            <Send className="h-4.5 w-4.5" strokeWidth={2.4} aria-hidden />
            Send message
          </>
        )}
      </Button>
    </form>
  );
}
