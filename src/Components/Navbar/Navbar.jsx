import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import "./Navbar.scss";
import { useCart } from "@/CartContext/CartContext";
import logo from "@/assets/images/logo.jpg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useCart();
  const totalItems = Object.values(cartItems).reduce((a, b) => a + b, 0);

  const location = useLocation();
  const currentPath = location.pathname;

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About us" },
    { path: "/menu", label: "Menu" },
    { path: "/features", label: "Features" },
    { path: "/contact", label: "Contact us" },
  ];

  return (
    <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <Link to="/" className="nav__logo">
          <img src={logo} alt="Food Logo" />
        </Link>
        <div className="nav__links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav__link ${currentPath === link.path ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="nav__right">
          <Link to="/basket" className={`nav__right-cart ${currentPath === "/basket" ? "active" : ""}`}>
            <ShoppingCart size={20}/>
            {totalItems > 0 && <span>{totalItems}</span>}
          </Link>
          <button className="nav__right-btn">Booking Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
