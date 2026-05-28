import { useState } from 'react';
import PackageCard from '../components/PackageCard';
import { adventurePackages } from '../data/packages';
import { ChevronDown } from 'lucide-react';

export default function Packages() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = ['All', 'Trekking', 'Camping', 'Safari', 'Rafting'];

  const filteredPackages =
    selectedCategory === 'All'
      ? adventurePackages
      : adventurePackages.filter((pkg) => pkg.category === selectedCategory);

  return (
    <>
      {/* Page Header */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700 mb-4">
            All Adventures
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Adventure Packages
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Choose from our carefully curated selection of adventure experiences.
            Every journey is designed to inspire and transform.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing <span className="font-semibold text-gray-900">{filteredPackages.length}</span>{' '}
            {filteredPackages.length === 1 ? 'package' : 'packages'}
            {selectedCategory !== 'All' && (
              <span>
                {' '}
                in <span className="font-semibold text-emerald-700">{selectedCategory}</span>
              </span>
            )}
          </p>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {selectedCategory === 'All' ? 'Filter by Category' : selectedCategory}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 z-20 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                      selectedCategory === cat
                        ? 'bg-emerald-50 text-emerald-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    } ${cat === 'All' ? 'border-b border-gray-100' : ''}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredPackages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No packages found in this category.</p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="mt-4 text-sm font-medium text-emerald-600 hover:text-emerald-700"
              >
                View all packages
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}