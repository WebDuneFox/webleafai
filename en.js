import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0A5C3E] to-[#1EAE79] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">WL</span>
              </div>
              <span className="text-xl font-bold gradient-text">WebLeafAI</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">{t('footer.description')}</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.services.title')}</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-[#1EAE79] text-sm transition-colors">{t('footer.services.websites')}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#1EAE79] text-sm transition-colors">{t('footer.services.ai')}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#1EAE79] text-sm transition-colors">{t('footer.services.maintenance')}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.company.title')}</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-400 hover:text-[#1EAE79] text-sm transition-colors">{t('footer.company.contact')}</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-[#1EAE79] text-sm transition-colors">{t('nav.pricing')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} WebLeafAI. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
