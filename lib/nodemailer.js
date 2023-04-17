import nodemailer from 'nodemailer';



export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

export const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL_TO,
    subject: 'New message from your website',
    text: 'You have a new message from your website'
};