import { Link } from "react-router-dom";

interface Destination {
  id: number;
  name: string;
  tagline: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  price: number;
  highlights: string[];
}

interface Props {
  dest: Destination;
}

export default function DestinationCard({ dest }: Props) {
  return (
    <Link
      to="/travel-packages"
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-orange-200 transition-all duration-300 cursor-pointer"
    >
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={dest.image}
          alt={dest.name}
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {dest.category}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1">
          <i className="ri-star-fill text-yellow-400 text-xs"></i>
          <span className="text-gray-800 text-xs font-bold">{dest.rating}</span>
          <span className="text-gray-400 text-xs">({dest.reviews})</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-black text-lg">{dest.name}</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-gray-500 text-sm mb-4">{dest.tagline}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {dest.highlights.slice(0, 3).map((h) => (
            <span key={h} className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full">
              {h}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-gray-400 text-xs">Starting from</span>
            <p className="text-gray-900 font-black text-xl">${dest.price.toLocaleString()}</p>
          </div>
          <span className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-full transition-colors whitespace-nowrap cursor-pointer">
            Explore
          </span>
        </div>
      </div>
    </Link>
  );
}
