import nodemailer from "nodemailer";

export async function POST(req) {
  const { email, name, message } = await req.json();

  //   console.log(email, name, message);
  //   console.log(process.env.EMAIL_SERVER);
  //   console.log(process.env.EMAIL_USER);
  //   console.log(process.env.EMAIL_PASS);

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER,
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "kvs.vishnu23@gmail.com",
    subject: "Contacted on Portfolio website",
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return new Response("EMAIL Sent successfully", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
