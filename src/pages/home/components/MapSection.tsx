export default function MapSection() {
  return (
    <section className="py-20 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">We Go Everywhere</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2">
            Our Global Reach
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            From the peaks of the Himalayas to the beaches of the Caribbean, we&apos;ve got you covered across 50+ countries.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-200 h-[450px] md:h-[550px]">
          <iframe
            title="UA Trips Global Destinations Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20000000!2d20!3d20!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Region highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {[
            { region: "Europe", count: "18 Countries", icon: "ri-building-line" },
            { region: "Asia", count: "15 Countries", icon: "ri-landscape-line" },
            { region: "Africa", count: "10 Countries", icon: "ri-sun-line" },
            { region: "Americas", count: "12 Countries", icon: "ri-earth-line" },
          ].map((r) => (
            <div key={r.region} className="bg-white rounded-xl p-4 border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                <i className={`${r.icon} text-xl`}></i>
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm">{r.region}</p>
                <p className="text-gray-400 text-xs">{r.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
