import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const topRowLinks = [
  { label: "Home", path: "/" },
  { label: "Customised Travel Packages", path: "/customised-packages" },
  { label: "Global Tours", path: "/global-tours" },
  { label: "Hotel Bookings", path: "/hotel-bookings" },
  { label: "Flight Deals", path: "/flight-deals" },
  { label: "Visa Assistance", path: "/visa-assistance" },
];

const bottomRowLinks = [
  { label: "Travel Insurance", path: "/travel-insurance" },
  { label: "24/7 Support Service", path: "/support-service" },
  { label: "About Us", path: "/about-us" },
];

export default function HeroNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const linkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `text-[13px] font-medium tracking-wide transition-colors duration-200 whitespace-nowrap cursor-pointer relative ${
      isActive ? "text-white" : "text-white/70 hover:text-white"
    }`;
  };

  return (
    <header className="relative z-10 w-full">
      {/* Desktop two-row nav */}
      <div className="hidden md:block">
        {/* Top row */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-[56px]">
          <Link to="/" className="flex items-center gap-2.5 cursor-pointer flex-shrink-0">
            <img
              src="https://static.readdy.ai/image/ab3e1b6ace2898e0dfaefcf807841ab1/54fcc53f122ddcc6f12f48c078ad2c76.png"
              alt="UA Travels"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <nav className="flex items-center gap-6 flex-1 justify-center">
            {topRowLinks.map((link) => (
              <Link key={link.path} to={link.path} className={linkClass(link.path)}>
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-white" />
                )}
              </Link>
            ))}
          </nav>

          {/* Social icons + Contact */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white cursor-pointer transition-colors duration-200"
            >
              <i className="ri-facebook-fill text-lg"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white cursor-pointer transition-colors duration-200"
            >
              <i className="ri-instagram-line text-lg"></i>
            </a>
            <a
              href="https://wa.me/923338286879"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-1.5 text-[13px] font-semibold whitespace-nowrap cursor-pointer transition-all duration-200 tracking-wide border border-white/60 text-white hover:bg-white/10 hover:border-white"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-center h-[44px] gap-8">
            {bottomRowLinks.map((link) => (
              <Link key={link.path} to={link.path} className={linkClass(link.path)}>
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-white" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden flex items-center justify-between px-5 h-[60px]">
        <Link to="/" className="flex items-center gap-2 cursor-pointer flex-shrink-0">
          <img
            src="https://static.readdy.ai/image/ab3e1b6ace2898e0dfaefcf807841ab1/54fcc53f122ddcc6f12f48c078ad2c76.png"
            alt="UA Travels"
            className="h-9 w-auto object-contain"
          />
        </Link>
        <button
          className="w-9 h-9 flex items-center justify-center cursor-pointer text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`text-xl ${menuOpen ? "ri-close-line" : "ri-menu-3-line"}`}></i>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          {[...topRowLinks, ...bottomRowLinks].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium cursor-pointer tracking-wide ${location.pathname === link.path ? "text-[#1a2e2a]" : "text-gray-500"}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-2">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center text-[#1a2e2a] cursor-pointer">
              <i className="ri-facebook-fill text-xl"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center text-[#1a2e2a] cursor-pointer">
              <i className="ri-instagram-line text-xl"></i>
            </a>
          </div>
          <a
            href="https://wa.me/923338286879"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 px-5 py-3 border border-[#1a2e2a] text-[#1a2e2a] text-sm font-semibold text-center whitespace-nowrap cursor-pointer tracking-wide"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
