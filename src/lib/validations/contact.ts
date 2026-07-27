import { z } from "zod";
import { services } from "@/config/site";

export const serviceSlugs = services.map((s) => s.slug) as [string, ...string[]];

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your full name")
    .max(80, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20, "Phone number is too long"),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  service: z.string().optional().or(z.literal("")),
  issueType: z.string().optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(20, "Tell us a bit more — at least 20 characters")
    .max(2000, "Message is too long"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
