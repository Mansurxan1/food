import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
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

    if (!formData.message) {
      setStatus("Please fill in the field!");
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending...");

    const message = `Yangi habar!\n\nXabar: ${formData.message}`;

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
      setStatus(error.response?.data?.description || "Message not sent.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#fbf1e7] py-28 text-center">
      <h2 className="text-[#e67e22] text-lg font-medium mb-4">CONTACT</h2>
      <h3 className="text-[#333] font-philosopher text-3xl mb-8 max-w-xl mx-auto">
        Food Stalls with Persons but also specialized equipment, Skills to manage.
      </h3>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4 items-start"
      >
        <textarea name="message" value={formData.message} onChange={handleChange} required
          className="w-full md:flex-1 p-4 border border-gray-300 rounded-lg text-base resize-none focus:outline-none focus:border-[#e67e22]"
          placeholder="Write your message here..."
        ></textarea>
        <div className="flex items-center justify-start">
        <button type="submit"
         className="w-36 px-10 py-7 bg-[#e67e22] text-white font-medium text-lg rounded-lg hover:bg-orange-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? "SENDING..." : "SEND"}
        </button>
        </div>
      </form>
      {status && (
        <p className={`text-sm mt-4 ${
            status.includes("xato") ? "text-red-600" : "text-green-600"
          }`}
        >
          {status}
        </p>
      )}
    </section>
  );
};

export default Contact;
