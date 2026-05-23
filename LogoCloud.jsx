import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/pricing', label: t('nav.pricing') },
    { path: '/contact', label: t('nav.contact') }
  ];

  const LanguageToggle = () => (
    <button
      onClick={toggleLanguage}
      className="bg-gray-800/50 rounded-full p-1 flex items-center text-sm font-medium transition-colors hover:bg-gray-700/50"
    >
      <span className={`px-3 py-1 rounded-full transition-colors ${language === 'en' ? 'bg-[#1EAE79] text-white' : 'text-gray-300'}`}>EN</span>
      <span className={`px-3 py-1 rounded-full transition-colors ${language === 'fr' ? 'bg-[#1EAE79] text-white' : 'text-gray-300'}`}>FR</span>
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#0A5C3E] to-[#1EAE79] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">WL</span>
            </div>
            <span className="text-xl font-bold gradient-text">WebLeafAI</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-[#1EAE79]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1EAE79]"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30
                    }}
                  />
                )}
              </Link>
            ))}
            <LanguageToggle />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-700"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors rounded-md ${
                    location.pathname === item.path
                      ? 'text-[#1EAE79] bg-gray-800/50'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/30'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;