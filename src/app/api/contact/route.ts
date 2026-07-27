import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  const body = await request.json();
  const result = contactFormSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: "Invalid submission", issues: result.error.flatten() },
      { status: 400 }
    );
  }

  // NOTE: wire this up to a real delivery mechanism before going live —
  // e.g. Resend, Postmark, SendGrid, or a CRM webhook. Kept as a stub here
  // since no email provider credentials are configured in this environment.
  // Example:
  //   await resend.emails.send({
  //     from: "website@amitop.com",
  //     to: siteConfig.email,
  //     subject: `New inquiry from ${result.data.name}`,
  //     text: JSON.stringify(result.data, null, 2),
  //   });

  console.log("Contact form submission:", result.data);

  return NextResponse.json({ success: true });
}
