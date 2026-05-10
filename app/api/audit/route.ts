import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, url } = await req.json();

  try {
    await resend.emails.send({
      from: "hello@mitrevdarko.dev",
      to: "hello@mitrevdarko.dev",
      subject: "New Website Audit Request",
      html: `
        <h2>New Audit Request</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${url || "Not provided"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}