"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";
import { services, serviceSubOptions } from "@/config/site";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      issueType: "",
      message: "",
    },
  });

  const selectedService = watch("service");
  const subOptions = selectedService ? serviceSubOptions[selectedService] : undefined;

  React.useEffect(() => {
    if (!subOptions) {
      setValue("issueType", "");
    }
  }, [subOptions, setValue]);

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card px-6 py-16 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-secondary" aria-hidden="true" />
        <h2 className="text-lg font-semibold text-foreground">Message sent</h2>
        <p className="max-w-sm text-sm text-foreground/60">
          Thanks for reaching out — a member of our team will get back to you
          within one business day.
        </p>
        <Button variant="outline" className="mt-2" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            placeholder="Justyna"
            invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone">Phone number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+234 800 000 0000"
            invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-xs text-destructive">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="company">Company (optional)</Label>
          <Input
            id="company"
            placeholder="Your company"
            {...register("company")}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="service">Service you&apos;re interested in</Label>
        <Select id="service" defaultValue="" {...register("service")}>
          <option value="">Select a service (optional)</option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
        </Select>
      </div>

      {subOptions && (
        <div>
          <Label htmlFor="issueType">What kind of issue is it?</Label>
          <Select id="issueType" defaultValue="" {...register("issueType")}>
            <option value="">Select an issue type (optional)</option>
            {subOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </div>
      )}

      <div>
        <Label htmlFor="message">How can we help?</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your site, timeline, and what you're looking to install or fix."
          invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      <div aria-live="polite">
        {status === "error" && (
          <p role="alert" className="text-sm text-destructive">
            Something went wrong sending your message. Please try again, or
            email us directly.
          </p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        variant="secondary"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </Button>
    </form>
  );
}
