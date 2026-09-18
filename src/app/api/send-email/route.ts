import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, product, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { message: "Name, phone, and message are required." },
        { status: 400 }
      );
    }

    const emailContent = `
      <h3>New Inquiry from DevBhoomi Paints Website</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email || "Not provided"}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Product Interest:</strong> ${product || "N/A"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: "DevBhoomi Website <onboarding@resend.dev>",
      to: ["ns0617341@gmail.com"], // Must be the registered Resend account email for unverified domains
      subject: `New Inquiry from ${name} - ${product || "General"}`,
      html: emailContent,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json(
        { message: "Failed to send email via Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email. Internal server error." },
      { status: 500 }
    );
  }
}
