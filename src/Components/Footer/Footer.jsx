import { Facebook, Twitter, Instagram } from 'lucide-react';
import logo from "@i/logo.jpg";
import { Link } from 'react-router-dom';

const Footer = () => {
  const links = {
    company: [
      { name: 'Landingpage', url: '#' },
      { name: 'Documentation', url: '#' },
      { name: 'Referral Program', url: '#' },
    ],
    menu: [
      { name: 'Landingpage', url: '#' },
      { name: 'Documentation', url: '#' },
      { name: 'Referral Program', url: '#' },
      { name: 'UI & UX Design', url: '#' },
      { name: 'Web Design', url: '#' },
    ]
  };

  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-4">
            <Link to={"/"}>
              <img src={logo} alt="Food Logo" className="h-16 w-16 rounded-full" />
            </Link>
            <a href='https://www.company-name.com' className="text-gray-400 hover:text-white">www.company-name.com</a>
            <a href="mailto:company-mail@gmail.com" className="text-gray-400 hover:text-white">company-mail@gmail.com</a>
            <a href="tel:+74851180325" className="text-gray-400 hover:text-white">Phone: +7 485-118-03-25</a>
          </div>

          <div className="flex flex-wrap gap-8 flex-1 justify-between">
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-semibold">Home</h4>
              <ul className="space-y-2">
                {links.menu.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="text-gray-400 hover:text-orange-500 transition">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-semibold">Menu</h4>
              <ul className="space-y-2">
                {links.menu.map((link, index) => (
                  <li key={index}>
                    <Link to={link.url} className="text-gray-400 hover:text-orange-500 transition">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-semibold">Company</h4>
              <ul className="space-y-2">
                {links.company.map((link, index) => (
                  <li key={index}>
                    <Link to={link.url} className="text-gray-400 hover:text-orange-500 transition">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 pt-4">
                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-orange-500 transition">
                  <Instagram size={20} />
                </a>
                <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-orange-500 transition">
                  <Facebook size={20} />
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-orange-500 transition">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
