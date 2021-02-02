const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'gordondrake00@gmail.com',
        subject: 'Welcome to the task manager!',
        text: `Welcome to the app, ${name}! \n Please let us know how you're getting on with the app. :)`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'gordondrake00@gmail.com',
        subject: 'Sorry to see you go',
        text: `Dear ${name},\nWe thank you for using our task manager app, and we're sorry to hear you wish to terminate your account.\n`
        +`If you wouldn't mind just sending us a quick reply to this email explaining why you chose to cancel your account, it would mean a lot to us as it will help us to improve our customer service in the future.`
        +`Thanks again for using our app!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}