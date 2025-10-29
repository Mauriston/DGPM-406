import React from 'react';
import Icon from './Icon';

interface HierarchyNodeProps {
  title: string;
  description: string;
  icon: string;
  isTop?: boolean;
  isBottom?: boolean;
}

const HierarchyNode: React.FC<HierarchyNodeProps> = ({ title, description, icon, isTop = false, isBottom = false }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-sm">
      <div className="bg-navy-light border-2 border-accent-cyan rounded-lg p-4 w-full text-center shadow-lg z-10">
        <Icon name={icon} className="text-accent-cyan text-5xl mb-2 mx-auto" />
        <h3 className="font-oswald text-2xl font-bold text-white">{title}</h3>
        <p className="text-gray-300 text-base">{description}</p>
      </div>
      {!isBottom && (
          <div className="w-1 bg-navy-accent h-16" />
      )}
    </div>
  );
};

export default HierarchyNode;