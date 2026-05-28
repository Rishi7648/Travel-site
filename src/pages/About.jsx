import { Link } from 'react-router-dom';
import { Mountain, Compass, Tent, Waves } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

export default function About() {
  const services = [
    {
      icon: Mountain,
      title: 'Guided Treks',
      description: "Expert-led treks through the world's most spectacular mountain ranges.",
    },
    {
      icon: Compass,
      title: 'Custom Itineraries',
      description: 'Tailor-made adventure plans designed around your preferences and fitness level.',
    },
    {
      icon: Tent,
      title: 'Camping Experiences',
      description: 'Comfortable wilderness camping with premium gear and professional camp setup.',
    },
    {
      icon: Waves,
      title: 'Water Adventures',
      description: 'Whitewater rafting, kayaking, and scuba diving in pristine waters.',
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/about-us.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Passionate adventurers dedicated to creating life-changing experiences
          </p>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2010, Adventure Travels was born from a deep passion for
                the outdoors and a desire to share the world&apos;s most extraordinary
                places with fellow explorers. What started as small guided treks in
                the Himalayas has grown into a premier adventure travel company
                offering experiences across six continents.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our team of experienced guides, naturalists, and adventure
                specialists have collectively led expeditions, ensuring
                every trip is safe, sustainable, and truly unforgettable. We believe
                that adventure travel has the power to transform lives, broaden
                perspectives, and create lasting bonds between people and nature.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are committed to responsible tourism, working closely with local
                communities to ensure our adventures benefit both travelers and the
                places they visit. Every journey with us contributes to conservation
                efforts and supports local economies.
              </p>
            </div>
            <div className="relative">
              <img
                src="/about-us.jpg"
                alt="Our team on an adventure"
                className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-6 rounded-xl shadow-lg hidden md:block">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm text-emerald-100">Years of Adventure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700 mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Inspiring Adventure, Sustaining Nature
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our mission is to inspire people to step outside their comfort zones
              and discover the extraordinary beauty of our planet. We are committed
              to providing safe, sustainable, and transformative adventure
              experiences that foster a deep connection with nature while
              preserving it for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Provided */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700 mb-4">
              What We Provide
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/packages"
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
            >
              Explore Our Packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}