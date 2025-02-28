import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "hunkinfrank50@gmail.com",
      pass: "rbav ocnh zois pdqm",
    },
  });

  try {
    await transporter.sendMail({
      from: "hunkinfrank50@gmail.com",
      to: "hunkinfrank50@gmail.com",
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nMessage: ${message}`,
      replyTo: email,
    });
    return new Response(JSON.stringify({ message: "Message sent successfully!" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Failed to send message" }), {
      status: 500,
    });
  }
} 
