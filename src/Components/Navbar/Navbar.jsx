import { useState, useEffect } from "react";
import { ShoppingCart } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";
import { useFoodContext } from "../../CartContext/Food";
import logo from "../../assets/images/logo.jpg"

const Navbar = () => {
  const { getTotalItems } = useFoodContext();
  const location = useLocation();
  const currentPath = location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-black p-2 bg-opacity-50 shadow-md ${isScrolled ? "scrolled" : ""}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Food Logo" className="rounded-full h-10 md:h-16 w-auto" />
        </Link>
        <div className="hidden sm:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className={`text-lg transition-colors md:block hidden duration-300 font-philosopher ${
                currentPath === link.path ? "font-semibold text-orange-600" : "text-white hover:text-orange-600 "
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link to="/basket" className={`relative p-2 ${currentPath === "/basket" ? "text-orange-600" : "text-white"}`}>
            <ShoppingCart size={20} />
            {getTotalItems() > 0 && (
              <span className="absolute top-[-5px] right-[-5px] bg-orange-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </Link>
          <button className="bg-orange-600 text-white py-2 px-2  md:px-4 text-sm rounded-md md:text-lg transition-colors duration-300 hover:bg-orange-700">
            Booking Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

