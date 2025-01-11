import { useState } from "react";
import axios from "axios";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    telegram: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ( !formData.message) {
      setStatus("Please fill in the field!");
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending...");

    const message = `
      Yangi habar!\n
      Xabar: ${formData.message}
    `;

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      setStatus("Bot token yoki chat ID topilmadi. Iltimos, sozlamalarni tekshiring.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          chat_id: chatId,
          text: message,
        }
      );

      if (response.data.ok) {
        setStatus("Your message has been sent!");
        setFormData({ message: "" });
      } else {
        setStatus("Error sending message");
      }
    } catch (error) {
      console.error("Telegram bot", error);
      setStatus(
        error.response?.data?.description || "Message not sent."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact">
      <h2>CONTACT</h2>
      <h3>Food Stalls with Persons but also specialized equipment, Skills to manage.</h3>
      <form onSubmit={handleSubmit} className="contact__form">
        <div className="contact__input-group">
          <textarea name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="contact__message-textarea"
          ></textarea>
        <button
          type="submit"
          className="contact__send-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "SENDING..." : "SEND"}
        </button>
        </div>
        {status && (
          <p className={`status ${status.includes("xato") ? "error" : "success"}`}>
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
