import { Link } from "react-router-dom";

const services = [
  { label: "Discounted Hotel Bookings", path: "/hotel-bookings" },
  { label: "Exclusive Flight Deals", path: "/flight-deals" },
  { label: "Global Tours", path: "/global-tours" },
  { label: "Visa Assistance", path: "/visa-assistance" },
  { label: "24/7 Support Service", path: "/support-service" },
  { label: "Travel Insurance", path: "/travel-insurance" },
];

const pages = [
  { label: "Home", path: "/" },
  { label: "Customised Packages", path: "/customised-packages" },
  { label: "About Us", path: "/about-us" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1410] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          <div className="lg:col-span-2">
            <img
              src="https://static.readdy.ai/image/ab3e1b6ace2898e0dfaefcf807841ab1/54fcc53f122ddcc6f12f48c078ad2c76.png"
              alt="UA Travels"
              className="h-10 w-auto object-contain mb-5"
            />
            <p className="text-white/35 text-sm leading-relaxed mb-6 max-w-sm">
              A family-run travel agency based in Karachi, Pakistan. 30+ years of expertise making international travel economical, transparent, and stress-free.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com/profile.php?id=100077260250631&mibextid=wwXIfr" rel="nofollow" target="_blank" className="w-8 h-8 flex items-center justify-center border border-white/15 text-white/40 hover:text-white hover:border-white/40 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-sm"></i>
              </a>
              <a href="https://instagram.com/uatravelsandtours" rel="nofollow" target="_blank" className="w-8 h-8 flex items-center justify-center border border-white/15 text-white/40 hover:text-white hover:border-white/40 transition-colors cursor-pointer">
                <i className="ri-instagram-line text-sm"></i>
              </a>
              <a href="https://wa.me/923338286879" rel="nofollow" target="_blank" className="w-8 h-8 flex items-center justify-center border border-white/15 text-white/40 hover:text-white hover:border-white/40 transition-colors cursor-pointer">
                <i className="ri-whatsapp-line text-sm"></i>
              </a>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-6">Navigation</p>
            <ul className="space-y-3.5">
              {pages.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-white/45 hover:text-white text-sm transition-colors cursor-pointer">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-6">Services</p>
            <ul className="space-y-3.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link to={s.path} className="text-white/45 text-sm cursor-pointer hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">&copy; 2026 UA Travels &amp; Tours. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-white/25 text-xs cursor-pointer hover:text-white/50 transition-colors">Privacy Policy</span>
            <span className="text-white/25 text-xs cursor-pointer hover:text-white/50 transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-white/5">
        <p className="text-white/5 font-black text-[80px] md:text-[120px] lg:text-[160px] tracking-tighter leading-none text-center select-none pb-2">
          UATRIPS
        </p>
      </div>
    </footer>
  );
}
