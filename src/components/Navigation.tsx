import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Blog', path: '/blog' },
    { name: 'Publication', path: '/publication' },
    { name: 'Conferences & Talks', path: '/conferences' },
    { name: 'About', path: '/about' }  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Close mobile menu on route change
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm" aria-label="Primary">
      <div className="relative">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-3 md:py-6">
          <div className="flex items-center justify-between gap-3">
            <Link
              to="/"
              className="font-serif font-semibold text-base md:text-lg text-gray-900 hover:text-gray-600 transition-colors truncate max-w-[60vw] md:max-w-none"
            >
              Rodrigo da Motta Cabral-Carvalho
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    aria-current={isActive ? 'page' : undefined}
                    className={`font-serif font-semibold transition-colors ${
                      isActive
                        ? 'text-gray-900 border-b border-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-controls="primary-mobile-menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileOpen && (
          <div id="primary-mobile-menu" className="md:hidden border-t border-gray-200 bg-white shadow-sm">
            <div className="max-w-4xl mx-auto px-4 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      aria-current={isActive ? 'page' : undefined}
                      className={`font-serif font-semibold transition-colors ${
                        isActive ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
