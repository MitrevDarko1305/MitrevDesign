import sgMail from "@sendgrid/mail";

export async function POST(req) {
   console.log("API HIT");
  try {
    const body = await req.json();

    // Honeypot (spam)
    if (body?.company) {
      return Response.json({ ok: true });
    }

    const name = body?.name || "";
    const email = body?.email || "";
   const message = body?.message || body?.note || "";


    // ✅ Debug: confirm env vars are loaded
    console.log("ENV CHECK", {
      hasKey: !!process.env.SENDGRID_API_KEY,
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
    });

    // Basic validation
    if (!email) {
  return Response.json(
    { error: "Missing required fields" },
    { status: 400 }
  );
}


    // SendGrid setup
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    console.log("CONTACT FORM SUBMISSION:", { name, email });

    // ✅ Send email
    await sgMail.send({
      to: process.env.MAIL_TO,
      from: process.env.MAIL_FROM, // verified sender
      subject: `New contact form: ${name || "Unknown"}`,
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}
