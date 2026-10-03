import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactNotification = async ({
    name,
    email,
    projectType,
    budget,
    message
}) => {
    const { data, error } = await resend.emails.send({
        from: "Eaglefire@resend.dev",
        to: "eaglefire.dev@gmail.com",
        replyTo: email,
        subject: "New Project Inquiry - EagleFire",
        html: `
            <h2>New Project Inquiry</h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Budget:</strong> ${budget || "Not specified"}</p>

            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `
    });
    await resend.emails.send({
    from: "Eaglefire@resend.dev",
    to: [email],
    subject: "Thank You for Contacting EagleFire",
    html: `
        <h2>Thank You for Contacting EagleFire Tech Solutions</h2>

        <p>Hi ${name},</p>

        <p>
            Thank you for submitting your project inquiry.
            We have received your message successfully.
        </p>

        <p>
            We will review your requirements and get back to you soon.
        </p>

        <p>
            Best regards,<br>
            EagleFire Tech Solutions
        </p>
    `
});

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

export default sendContactNotification;