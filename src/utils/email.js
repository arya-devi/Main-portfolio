import emailjs from "@emailjs/browser";

export const sendMail = async (form) => {
  await emailjs.sendForm(
    process.env.REACT_APP_EMAIL_SERVICE,
    process.env.REACT_APP_EMAIL_TEMPLATE,
    form,
    process.env.REACT_APP_EMAIL_PUBLIC
  );
};
