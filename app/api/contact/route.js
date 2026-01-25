export async function POST(req) {
  try {
    const body = await req.json();

    // Honeypot (spam)
    if (body?.company) {
      return Response.json({ ok: true });
    }

    console.log("CONTACT FORM SUBMISSION:", body);

    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}
