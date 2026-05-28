import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

export default function PackageCard({ pkg }) {
  return (
    <div className="overflow-hidden rounded-xl border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group bg-white">
      <Link to={`/packages/${pkg.id}`} className="block">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center rounded-full bg-emerald-600 px-2.5 py-0.5 text-xs font-medium text-white">
              {pkg.category}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-medium text-gray-800 backdrop-blur-sm">
              <Clock className="h-3 w-3" />
              {pkg.duration}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 pt-4 pb-2">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
            {pkg.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
            {pkg.shortDescription}
          </p>
        </div>
      </Link>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 pt-0">
        <div className="flex items-center gap-1 text-emerald-700 font-bold text-lg">
          <span className="text-sm font-bold">RS</span>
          <span>{pkg.price.toLocaleString()}</span>
          <span className="text-xs font-normal text-gray-400">/person</span>
        </div>
        <Link
          to={`/packages/${pkg.id}`}
          className="inline-flex items-center justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-orange-600 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}