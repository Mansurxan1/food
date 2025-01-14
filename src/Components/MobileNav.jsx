import { Home, Info, MenuIcon, Star, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const MobileNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/about', icon: Info, label: 'About' },
    { path: '/menu', icon: MenuIcon, label: 'Menu' },
    { path: '/features', icon: Star, label: 'Features' },
    { path: '/contact', icon: Phone, label: 'Contact' },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 md:hidden -translate-x-1/2 w-[90%] max-w-md">
      <div className="relative">
        <nav className="relative bg-[#FFD233] rounded-full shadow-lg">
          <div className="flex items-center justify-around p-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.path;
              
              return (
                <div key={item.path} className="relative">
                  {isActive && (
                    <Link
                      to={item.path}
                      className="absolute -top-8 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#2A2A42] rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Icon size={24} className="text-[#FFD233]" />
                    </Link>
                  )}
                  
                  <Link
                    to={item.path}
                    className={`relative flex flex-col items-center transition-all duration-300 ${
                      isActive ? 'opacity-0' : 'text-black/70 hover:text-black'
                    }`}
                  >
                    <Icon size={24} />
                    <span className="text-xs mt-1 font-medium">{item.label}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;


