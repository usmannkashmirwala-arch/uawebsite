import { useState } from "react";

const faqs = [
  {
    q: "What does a customised travel package include?",
    a: "Our packages cover your complete journey: visa document guidance and application review, flight routing using Sabre GDS professional systems with comfortable connections, hotel selection in appropriate neighbourhoods, attraction and restaurant recommendations based on your interests, day-by-day itinerary structuring, payment options that eliminate the 16% foreign transaction fee, and 24/7 support throughout your journey.",
  },
  {
    q: "How is this different from booking a pre-made tour package?",
    a: "Pre-made packages follow fixed itineraries designed for average tourists. We build trips around your personality, pace, and interests. If you're a foodie, we recommend authentic local restaurants and markets. If you value history, we suggest lesser-known museums without crowds. If you're travelling with elderly parents, we select comfortable flight connections and appropriate hotel locations.",
  },
  {
    q: "Do you help with visa applications for international travel?",
    a: "Yes. We guide Pakistani travellers through visa requirements for Schengen countries, UK, USA, Canada, and other destinations. We tell you exactly which documents embassies expect, help you book flights that meet visa officer standards, provide hotel confirmations that satisfy embassy requirements, and review your application before submission. We don't file applications on your behalf, but we prepare you so your application succeeds.",
  },
  {
    q: "How do you choose hotel locations for customised packages?",
    a: "We select hotels based on your trip purpose and travel style, not just price. Business travellers get properties near financial districts. Families receive hotels with proper facilities in safe neighbourhoods. Culture enthusiasts stay in historic areas near major attractions. We know which Dubai areas are convenient versus far from everything, which Istanbul neighbourhoods are authentic versus tourist traps, which Paris districts match different budgets and preferences.",
  },
  {
    q: "What makes your flight routing better than booking online myself?",
    a: "We use Sabre GDS, the professional airline distribution system that shows routes and connections not visible on consumer sites. We build itineraries based on your comfort: shorter layovers if you dislike airports, longer connections if you want to explore stopover cities, direct flights if you're travelling with elderly parents. We also access flexible fare options with lower change fees.",
  },
  {
    q: "How do you save Pakistani travellers money on international bookings?",
    a: "We eliminate the 16% foreign transaction fee that Pakistani credit cards face when booking from international airline and hotel websites. We accept bank cheque payments and provide card machine service in Karachi. You pay only the actual package cost plus our transparent service fee with no hidden currency conversion markup.",
  },
  {
    q: "Do you plan day-by-day itineraries or just book flights and hotels?",
    a: "We plan complete day-by-day itineraries that flow naturally. Each day is structured geographically so you don't waste time backtracking. Morning activities near your hotel. Lunch in areas you're already exploring. Afternoon experiences that make logical sense. Evening plans close to good dinner options. We tell you which attractions are best in morning light, which neighbourhoods are safe for evening walks, how to avoid crowds at popular sites.",
  },
  {
    q: "What destinations do you create customised packages for?",
    a: "We serve travellers worldwide with particular expertise in Dubai, Saudi Arabia (Hajj/Umrah), UK, USA, Canada, Europe (France, Germany, Italy, Turkey), Southeast Asia (Malaysia, Thailand, Singapore), and Australia. We handle both international packages and domestic Pakistani travel, and specialise in multi-destination trips that require complex coordination.",
  },
  {
    q: "How quickly can you create a customised travel package?",
    a: "We provide detailed package proposals within 2–3 days of receiving your travel preferences, budget, and dates. The proposal includes flight routing options, hotel recommendations with neighbourhood explanations, attraction suggestions based on your interests, and day-by-day itinerary structure. For urgent bookings, we can provide initial options within 24 hours during business hours.",
  },
  {
    q: "What if I need to change my package after booking?",
    a: "We specialise in booking flexible fare options when appropriate. While these cost slightly more upfront, they allow date changes without the typical $200–400 airline change fees. During planning, we discuss your likelihood of needing changes and recommend suitable fare types. If circumstances change, we handle all rebooking coordination directly with airlines and hotels on your behalf.",
  },
  {
    q: "Do you only serve clients in Pakistan?",
    a: "No, we serve clients throughout the world. We have a card machine service for in-person payment in Karachi, but we accept bank cheques and credit card payments from anywhere and handle all planning remotely via phone, WhatsApp, and email.",
  },
  {
    q: "What payment methods do you accept for packages?",
    a: "We accept bank cheques from anywhere in Pakistan, card payments via mobile card machine in Karachi, and bank transfers. We're working on introducing Buy Now Pay Later options to make travel more accessible.",
  },
  {
    q: "Can you create packages for special occasions like honeymoons or anniversaries?",
    a: "Yes. We design packages around your occasion's needs: romantic neighbourhoods, special dining experiences, appropriate pacing that prioritises relaxation over rushing, and memorable activities suited to couples. We understand which destinations work for different celebration styles — beach escapes, cultural city experiences, adventure trips, or luxury resort relaxation.",
  },
  {
    q: "Do customised packages include travel insurance?",
    a: "We offer travel insurance as an add-on to all packages and strongly recommend it for international trips. We explain coverage options and help you choose appropriate protection for your trip value and activities.",
  },
  {
    q: "How much do customised travel packages cost?",
    a: "Package costs vary based on destinations, trip length, accommodation preferences, and travel dates. We provide transparent pricing breakdowns showing flights, hotels, activities, and our service fee separately. We can work within specific budgets and show you options at different price points during planning.",
  },
  {
    q: "Who benefits most from customised travel packages?",
    a: "First-time international travellers needing guidance on visas, customs, and foreign airports. Families planning multi-destination trips. Travellers with specific interests wanting experiences that match their personality. Business travellers needing flexible tickets and optimal routing. Pakistani travellers wanting to avoid the 16% foreign transaction fee. Anyone planning complex trips with 3+ destinations or unique requirements.",
  },
];

export default function PackagesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 bg-[#fdf8f3]">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Got Questions?</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a2e2a] mt-2">Frequently Asked Questions</h2>
          <p className="text-gray-500 mt-3 text-sm">Everything you need to know about our customised travel packages.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                openIndex === i ? "border-orange-300" : "border-gray-100"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
              >
                <span className={`font-semibold text-sm leading-snug ${openIndex === i ? "text-orange-500" : "text-[#1a2e2a]"}`}>
                  {faq.q}
                </span>
                <span className={`w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 transition-all duration-200 ${
                  openIndex === i ? "bg-orange-500 text-white rotate-45" : "bg-gray-100 text-gray-500"
                }`}>
                  <i className="ri-add-line text-base"></i>
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
