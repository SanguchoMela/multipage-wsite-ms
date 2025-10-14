export const prerender = false;

import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  const contentType = request.headers.get("content-type") || "";
  let body: any = {};

  if (contentType.includes("application/json")) {
    body = await request.json();
  } else if (contentType.includes("multipart/form-data")) {
    const formData = await request.formData();
    body = Object.fromEntries(formData);
  } else if (contentType.includes("application/x-www-form-urlencoded")) {
    const formData = await request.formData();
    body = Object.fromEntries(formData);
  }

  const { name, email, phone, message } = body;

  if (!name || !email || !message) {
    return new Response("Faltan campos obligatorios", { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: import.meta.env.SMTP_HOST,
    port: Number(import.meta.env.SMTP_PORT),
    secure: Number(import.meta.env.SMTP_PORT) === 465,
    auth: {
      user: import.meta.env.SMTP_USER,
      pass: import.meta.env.SMTP_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: import.meta.env.CONTACT_RECEIVER, // Tu correo receptor
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: message,
      html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
        `,
    });
    console.log("Message sent:", info.messageId);
    return new Response("Mensaje enviado correctamente", { status: 200 });
  } catch (error) {
    console.error("Error sending message:", error);
    return new Response("Error al enviar el mensaje", { status: 500 });
  }
};
