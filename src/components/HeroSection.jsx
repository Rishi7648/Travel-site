import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero.jpg)' }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Explore Your Next{' '}
            <span className="text-emerald-400">Adventure</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover breathtaking destinations, conquer towering peaks, and create
            unforgettable memories with our expertly guided adventure tours around
            the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/packages"
              className="inline-flex items-center justify-center gap-1 rounded-md bg-emerald-600 px-8 py-6 text-lg font-medium text-white hover:bg-emerald-700 transition-colors"
            >
              View Packages
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-md border border-white px-8 py-6 text-lg font-medium text-white hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
