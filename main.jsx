import React from 'react';
import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion';

const logos = [
  { name: 'n8n', src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/0d3ce392-7dc5-49f0-a392-60189b5be7fe/b136b7ac37768ae5f9786b8731f8fdcc.png' },
  { name: 'Zapier', src: 'https://cdn.worldvectorlogo.com/logos/zapier.svg' },
  { name: 'Slack', src: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg' },
  { name: 'Gmail', src: 'https://cdn.worldvectorlogo.com/logos/gmail-icon-2.svg' },
  { name: 'Outseta', src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/0d3ce392-7dc5-49f0-a392-60189b5be7fe/c388f9fcf4eca91a2977446df60ed4f0.png' },
  { name: 'Microsoft Teams', src: 'https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg' },
  { name: 'Trello', src: 'https://cdn.worldvectorlogo.com/logos/trello.svg' },
  { name: 'HubSpot', src: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg' },
  { name: 'Salesforce', src: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg' },
  { name: 'Discord', src: 'https://cdn.worldvectorlogo.com/logos/discord-6.svg' },
];

const LogoCloud = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
      >
        {logos.map((logo) => (
          <div key={logo.name} className="mx-10 flex items-center justify-center" style={{ height: '60px' }}>
            <img 
              src={logo.src} 
              alt={`${logo.name} logo`} 
              className="h-8 md:h-10 object-contain transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </Marquee>
    </motion.div>
  );
};

export default LogoCloud;