import emailjs from '@emailjs/browser';

const sendCustomEmail = (details) => {
  // Initialize using your User ID saved in the .env file
  emailjs.init(process.env.VITE_EMAIL_USER_ID);

  emailjs
    .send(
      process.env.VITE_EMAIL_SERVICE_ID, // The service ID saved in the .env file
      process.env.VITE_EMAIL_TEMPLATE_ID, // The template ID also saved in the .env file
      {
        to_email: details.to_email,
        subject: details.subject,
        message: details.message,
      }
    )
    .then((response) => {
      // Debug statement on the console to show the ;
    })
    .catch((error) => {
      // Debug statement on the console to show the error that occurred
      console.error(error);
    });
};

export { sendCustomEmail };
