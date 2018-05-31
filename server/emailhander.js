const nodemailer = require('nodemailer');

const sendEmail = (name, subject, message, email) => {
	const template = `<h1>Message from ${name} through haileybobella.com Contact Form</h1>
<h3>Hello Hailey!</h3>
<p>You have received an email through your portfolio website:</p>
<p>Name: ${name}</p>
<p>Subject: ${subject || 'No Subject Provided'}</p>
<p>Message: ${message}</p>
<p>Email: ${email}</p>`;
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.EMAIL_PASSWORD
		}
	});

	let mailOptions = {
		from: '"haileybobella.com via Hexbot" <hexbotmailer@gmail.com>',
		to: 'haileybobella@gmail.com',
		subject: `New Portfolio Message ${subject} from ${name}`,
		html: template
	}

	transporter.sendMail(mailOptions, (err, info) => {
		if (err) console.error('error in sending the email: ', err);
		console.log(`Invitation sent by ${name} at ${email}: ${info.messageId}`);
	})
}

module.exports = {
	sendEmail
}
