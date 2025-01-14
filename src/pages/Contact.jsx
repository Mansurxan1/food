import WhereToVoteOutlinedIcon from "@mui/icons-material/WhereToVoteOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useState, useEffect } from "react";

const Contact = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const cardData = [
    {
      icon: <WhereToVoteOutlinedIcon style={{ fontSize: "48px", color: "#f97316" }} />,
      title: "FAST FOOD",
      description: "SoHo 94 Broadway St New York, NY 1001",
    },
    {
      icon: <LocalPhoneOutlinedIcon style={{ fontSize: "48px", color: "#f97316" }} />,
      title: "PHONE NUMBER",
      description: "+998940017653",
    },
    {
      icon: <LocalPrintshopOutlinedIcon style={{ fontSize: "48px", color: "#f97316" }} />,
      title: "FAX",
      description: "1-234-567-8900",
    },
    {
      icon: <EmailOutlinedIcon style={{ fontSize: "48px", color: "#f97316" }} />,
      title: "EMAIL",
      description: "kabdulatif328@gmail.com",
    },
  ];

  const socialIcons = [
    {
      icon: <FacebookIcon style={{ fontSize: "36px", color: "#f97316" }} />,
      link: "#",
    },
    {
      icon: <TwitterIcon style={{ fontSize: "36px", color: "#f97316" }} />,
      link: "#",
    },
    {
      icon: <InstagramIcon style={{ fontSize: "36px", color: "#f97316" }} />,
      link: "#",
    },
    {
      icon: <TelegramIcon style={{ fontSize: "36px", color: "#f97316" }} />,
      link: "#",
    },
  ];

  return (
    <section className="flex items-center justify-center min-h-screen pt-32 sm:py-32">
      <div className="container text-white px-1">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {cardData.map((card, index) => (
              <div
                key={index}
                className={`flex flex-col cursor-pointer shadow-2xl w-full sm:w-[180px] md:w-[200px] border-2 border-orange-600 items-center text-center py-7 rounded-lg transition-transform duration-500 hover:scale-105 ${
                  animate ? "animate-spinOnce" : ""
                }`}
              >
                {card.icon}
                <h3 className="text-black font-bold text-base">{card.title}</h3>
                <p className="text-black text-sm w-40">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div className="border-2 shadow-2xl border-orange-600 p-5 rounded-lg">
              <form className="space-y-4">
                <div>
                  <label className="block text-black font-philosopher">Email</label>
                  <input
                    type="email"
                    placeholder="Enter a valid email address"
                    className="w-full border-b-2 border-orange-600 p-2 text-black outline-none"
                  />
                </div>
                <div>
                  <label className="block text-black font-philosopher">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="w-full border-b-2 border-orange-600 p-2 text-black outline-none"
                  />
                </div>
                <div>
                  <label className="block text-black font-philosopher">Message</label>
                  <textarea
                    placeholder="Enter your message"
                    className="w-full p-4 border-b-2 border-orange-600 text-black outline-none resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white p-3 rounded-md font-semibold hover:bg-orange-600"
                >
                  SUBMIT
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl text-center sm:text-start sm:text-3xl md:text-4xl text-black font-philosopher font-bold mb-4">
                Contact Us
              </h2>
              <p className="text-black mb-4 sm:w-[320px] md:w-[400px] italic font-medium">
                Hello dear ones, thank you for subscribing to our page. Here you will find many ways to easily and quickly get in touch with us, so feel free to reach out. <br />
                <span>Quality comes before profit for us.</span>
              </p>
              <p className="text-black sm:w-[340px] md:w-[420px] mb-6">
                We would also like to remind you that for the convenience of our users, you can now follow us online. To do so, simply choose the social media platform that suits you.
              </p>
              <div className="flex space-x-4 pl-20 pb-7 sm:pl-0">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="transition-transform duration-500 hover:scale-125"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
