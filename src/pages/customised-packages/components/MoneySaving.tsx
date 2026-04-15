export default function MoneySaving() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Save More</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0f1c19] mb-5 leading-tight">Money-Saving Benefits</h2>
            <p className="text-gray-500 leading-relaxed mb-4 text-sm">
              Pakistani credit and debit cards face a <strong className="text-[#0f1c19]">16% foreign transaction fee</strong> when booking from international airline and hotel websites. We eliminate that entirely.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm">
              We accept bank cheques and provide card machine service in Karachi. You pay only the actual package cost plus our transparent service fee — no hidden currency conversion markup. For many trips, the fees you avoid plus better fares we access <strong className="text-[#0f1c19]">offset our service fee entirely</strong>.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "ri-bank-card-line", title: "No 16% Fee", desc: "Eliminate foreign transaction charges on all bookings" },
              { icon: "ri-shield-check-line", title: "Transparent Pricing", desc: "Clear breakdown of every cost — no hidden markups" },
              { icon: "ri-building-2-line", title: "Partner Rates", desc: "Direct hotel partnerships for better prices and perks" },
              { icon: "ri-customer-service-2-line", title: "24/7 Support", desc: "We're with you throughout your entire journey" },
            ].map((item) => (
              <div key={item.title} className="border border-gray-100 p-5">
                <div className="w-8 h-8 flex items-center justify-center mb-3">
                  <i className={`${item.icon} text-xl text-[#0f1c19]`}></i>
                </div>
                <h4 className="font-bold text-[#0f1c19] text-sm mb-1">{item.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
