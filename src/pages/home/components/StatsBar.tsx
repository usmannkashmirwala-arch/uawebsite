const stats = [
  { value: "30+", label: "Years of Expertise" },
  { value: "12,000+", label: "Happy Travellers" },
  { value: "50+", label: "Countries Covered" },
  { value: "98%", label: "Satisfaction Rate" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#0f1c19] py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center lg:items-start lg:px-10 first:lg:pl-0 last:lg:pr-0">
              <p className="text-3xl font-black text-white tracking-tight">{stat.value}</p>
              <p className="text-white/45 text-xs mt-1 tracking-wide uppercase font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
