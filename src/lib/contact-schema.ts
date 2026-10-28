import { z } from "zod";

/**
 * Shared validation schema for the contact form. Used identically by the
 * client (React Hook Form) and the server (POST /api/contact) so validation
 * rules can never drift apart.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(120, "Name must be 120 characters or fewer."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(200, "Email must be 200 characters or fewer."),
  topic: z.enum(
    ["general", "membership", "verification", "resources", "other"],
    { message: "Please choose a topic." },
  ),
  message: z
    .string()
    .trim()
    .min(20, "Please include at least 20 characters so we can help you properly.")
    .max(2000, "Message must be 2000 characters or fewer."),
  consent: z.literal(true, {
    message: "Please confirm you agree to be contacted about your inquiry.",
  }),
  /** Honeypot — must stay empty. Bots fill it; humans never see it. */
  company_site: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
