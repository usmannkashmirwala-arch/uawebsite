const features = [
  {
    icon: "ri-shield-check-line",
    title: "100% Safe & Secure",
    desc: "Your safety is our top priority. All our packages include comprehensive travel insurance and 24/7 emergency support.",
    color: "bg-orange-50 text-orange-500",
  },
  {
    icon: "ri-price-tag-3-line",
    title: "Best Price Guarantee",
    desc: "We match any lower price you find. Transparent pricing with no hidden fees. What you see is what you pay.",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "24/7 Expert Support",
    desc: "Our travel experts are available around the clock to assist you before, during, and after your trip.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: "ri-route-line",
    title: "Customised Itineraries",
    desc: "Every trip is tailored to your preferences, budget, and travel style. No cookie-cutter packages here.",
    color: "bg-rose-50 text-rose-500",
  },
  {
    icon: "ri-flight-takeoff-line",
    title: "Flight & Hotel Deals",
    desc: "Access exclusive deals on flights and hotels worldwide. We handle all the logistics so you can focus on the fun.",
    color: "bg-violet-50 text-violet-500",
  },
  {
    icon: "ri-passport-line",
    title: "Visa Assistance",
    desc: "Stress-free visa processing with expert guidance. We handle the paperwork so you can focus on packing.",
    color: "bg-green-50 text-green-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">Why Travel With Us</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2">
            Your Journey, Our Passion
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            We go beyond booking; we craft unforgettable experiences that you&apos;ll talk about for years.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-7 rounded-2xl border border-gray-100 hover:border-orange-200 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 flex items-center justify-center rounded-xl ${f.color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${f.icon} text-2xl`}></i>
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
