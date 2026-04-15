import { useState } from "react";

const faqs = [
  {
    q: "How many people go on each tour?",
    a: "Every tour is capped at 8 to 10 people. This is non negotiable for us, it's the only way to maintain the quality and depth of experience we promise.",
  },
  {
    q: "Who are your tours designed for?",
    a: "People who travel to genuinely experience a place, not just photograph it. Our travelers tend to be curious, open minded, and done with the standard package holiday. Age range varies widely, what they share is a real appetite for depth.",
  },
  {
    q: "How much do your tours cost?",
    a: "Our tours are priced between $2,000 and $5,000 per person depending on the destination and length of the tour. This covers accommodation, in-destination transport, and all planned experiences. International flights are booked separately.",
  },
  {
    q: "How far in advance do tours get announced?",
    a: "We typically announce tours 3 to 6 months in advance. Because spots are extremely limited, joining our mailing list is the best way to get early access.",
  },
  {
    q: "Are your destinations safe?",
    a: "Yes. Every destination we select goes through a thorough safety and cultural assessment before we plan anything. We only run tours to places we've either visited ourselves or vetted through trusted local partners on the ground.",
  },
  {
    q: "What makes your tours different from other small group travel companies?",
    a: "Most small group tours still follow well-worn routes, they just do it with fewer people. We start from scratch with every destination, often spending months researching places that don't appear in standard itineraries at all. The result is a fundamentally different kind of trip.",
  },
  {
    q: "Can I join a tour solo?",
    a: "Absolutely. The small group size means you'll genuinely connect with the people you travel with.",
  },
];

export default function GlobalToursFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 bg-[#fdf8f3]">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Got Questions?</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a2e2a] mt-2">Frequently Asked Questions</h2>
          <p className="text-gray-500 mt-3 text-sm">Everything you need to know about our global tours.</p>
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
