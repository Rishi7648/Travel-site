import { Link } from 'react-router-dom';
import { Mountain, Compass, Tent, Waves } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import PackageCard from '../components/PackageCard';
import ServiceCard from '../components/ServiceCard';
import { featuredPackages } from '../data/packages';

export default function Home() {
  const services = [
    {
      icon: Mountain,
      title: 'Trekking',
      description:
        'Conquer breathtaking trails through mountains, forests, and remote wilderness with experienced guides.',
    },
    {
      icon: Compass,
      title: 'Hiking',
      description:
        'Explore stunning landscapes on foot, from gentle nature walks to challenging alpine ascents.',
    },
    {
      icon: Tent,
      title: 'Camping',
      description:
        'Sleep under the stars in pristine locations, from alpine meadows to desert dunes.',
    },
    {
      icon: Waves,
      title: 'Rafting',
      description:
        'Navigate thrilling rapids on remote rivers, from beginner-friendly to adrenaline-pumping Class IV.',
    },
  ];

  return (
    <>
      <HeroSection />

      {/* Featured Packages Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700 mb-4">
              Featured Adventures
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Adventure Packages
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Explore our most sought-after adventures, handpicked for unforgettable
              experiences and breathtaking destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/packages"
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700 mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Adventures We Offer
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From towering mountain peaks to the depths of the ocean, we offer a
              diverse range of adventure experiences for every thrill-seeker.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-8 text-lg">
            Join thousands of adventurers who have experienced the trip of a
            lifetime with us. Your dream journey is just one click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/packages"
              className="inline-flex items-center justify-center rounded-md bg-orange-500 px-8 py-6 text-lg font-medium text-white hover:bg-orange-600 transition-colors"
            >
              Explore Packages
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white px-8 py-6 text-lg font-medium text-white hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
