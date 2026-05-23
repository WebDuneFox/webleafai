import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactInfo = () => {
  const { t, language } = useLanguage();

  const contactInfoItems = [
    {
      icon: Mail,
      title: t('contact.info.email.title'),
      value: t('contact.info.email'),
      link: `mailto:${t('contact.info.email')}`
    },
    {
      icon: MapPin,
      title: t('contact.info.location.title'),
      value: language === 'fr' ? t('contact.info.location.text') : 'Across Canada (Based in Montreal, QC)',
      link: null
    }
  ];

  const workWithUsItems = [
    t('contact.workwithus.item1'),
    t('contact.workwithus.item2'),
    t('contact.workwithus.item3'),
    t('contact.workwithus.item4'),
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">{t('contact.info.title')}</h2>
        <p className="text-gray-300 mb-8">
          {t('contact.info.description')}
        </p>
      </div>

      <div className="space-y-6">
        {contactInfoItems.map((info, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#0A5C3E] to-[#1EAE79] rounded-lg flex items-center justify-center">
              <info.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">{info.title}</h3>
              {info.link ? (
                <a 
                  href={info.link} 
                  className="text-[#1EAE79] hover:text-[#0A5C3E] transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-300">{info.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="glass-effect p-6 rounded-2xl">
        <h3 className="text-xl font-bold text-white mb-4">{t('contact.workwithus.title')}</h3>
        <ul className="space-y-3 text-gray-300">
          {workWithUsItems.map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#1EAE79] rounded-full mt-2 flex-shrink-0"></div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative">
        <img  
          className="w-full h-64 object-cover rounded-2xl" 
          alt="WebLeafAI contact form and communication illustration"
          src="https://storage.googleapis.com/hostinger-horizons-assets-prod/0d3ce392-7dc5-49f0-a392-60189b5be7fe/de98ee91def0baa2aad315545d242032.png" />
      </div>
    </div>
  );
};

export default ContactInfo;