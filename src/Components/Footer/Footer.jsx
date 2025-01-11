import { Facebook, Twitter, Instagram } from 'lucide-react';
import './Footer.scss';
import logo from "@i/logo.jpg"
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
      { name: 'Web Design', url: '#' }
    ]
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <Link to={"/"}><img src={logo} alt="Food Logo" className="footer__logo" /></Link>
            <a href='https://www.company-name.com'>www.company-name.com</a>
            <a href="maito:@company-mail@gmail.com">company-mail@gmail.com</a>
            <a href="tel:+74851180325">Phone: +7 485-118-03-25</a>
          </div>

          <div className="footer__links">
            <div className="link__column">
              <h4>Home</h4>
              <ul>
                {links.menu.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link__column">
              <h4>Menu</h4>
              <ul>
                {links.menu.map((link, index) => (
                  <li key={index}>
                    <Link to={"/"} >{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link__column">
              <h4>Company</h4>
              <ul>
                {links.company.map((link, index) => (
                  <li key={index}>
                    <Link to={"/"}>{link.name}</Link>
                  </li>
                ))}
                <div className="social__links">
                  <a href="#" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                  <a href="#" aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

