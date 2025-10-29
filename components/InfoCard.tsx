import React from 'react';
import Icon from './Icon';

interface InfoCardProps {
  title: string;
  icon: string;
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, icon, children }) => {
  return (
    <div className="bg-navy-light p-6 rounded-lg shadow-xl border border-navy-accent h-full transition-transform transform hover:-translate-y-1">
      <div className="flex items-center mb-3">
        <Icon name={icon} className="text-accent-gold text-4xl" />
        <h3 className="font-oswald text-2xl font-semibold text-white ml-3">{title}</h3>
      </div>
      <div className="text-gray-300 space-y-2">{children}</div>
    </div>
  );
};

export default InfoCard;