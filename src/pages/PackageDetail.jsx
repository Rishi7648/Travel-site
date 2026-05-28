import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Star, MapPin } from 'lucide-react';
import { adventurePackages } from '../data/packages';

export default function PackageDetail() {
  const { id } = useParams();
  const pkg = adventurePackages.find((p) => p.id === id);
  const [booked, setBooked] = useState(false);

  if (!pkg) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Package Not Found</h2>
        <p className="text-gray-500 mb-6">The package you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          to="/packages"
          className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Packages
        </Link>
      </div>
    );
  }

  const handleBookNow = () => {
    setBooked(true);
    setTimeout(() => setBooked(false), 4000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="max-w-7xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-emerald-600 px-2.5 py-0.5 text-xs font-medium text-white mb-3">
              {pkg.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              {pkg.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{pkg.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold">RS</span>
                <span>{pkg.price.toLocaleString()} / person</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Expert Guided</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 text-sm font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Packages
            </Link>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Adventure</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{pkg.fullDescription}</p>

            <div className="border-t my-8" />

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Day-by-Day Itinerary</h2>
            <div className="space-y-4">
              {pkg.itinerary.map((day, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-bold shrink-0">
                      {index + 1}
                    </div>
                    {index < pkg.itinerary.length - 1 && (
                      <div className="w-0.5 h-full bg-emerald-200 mt-1" />
                    )}
                  </div>
                  <div className="pb-6">
                    <p className="text-sm font-semibold text-emerald-700 mb-1">Day {index + 1}</p>
                    <p className="text-gray-600">{day}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="rounded-xl border bg-white p-6 shadow-lg">
                {booked && (
                  <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-emerald-700 text-sm mb-4">
                    Booking request submitted! Our team will contact you within 24 hours.
                  </div>
                )}

                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-emerald-600">RS</span>
                    <span className="text-3xl font-bold text-gray-900">
                      {pkg.price.toLocaleString()}
                    </span>
                    <span className="text-gray-400 text-sm">/ person</span>
                  </div>
                </div>

                <div className="border-t my-4" />

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Clock className="h-4 w-4 text-emerald-600" />
                    <span>Duration: {pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Star className="h-4 w-4 text-emerald-600" />
                    <span>4.8 / 5.0 (128 reviews)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 text-emerald-600" />
                    <span>Expert Guided Tour</span>
                  </div>
                </div>

                <button
                  onClick={handleBookNow}
                  className="w-full inline-flex items-center justify-center rounded-md bg-orange-500 px-4 py-3 text-base font-medium text-white hover:bg-orange-600 transition-colors"
                >
                  Book This Adventure
                </button>

                <p className="text-xs text-gray-400 text-center mt-3">
                  Free cancellation up to 30 days before departure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}