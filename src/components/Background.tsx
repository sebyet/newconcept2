import React, { type ReactNode } from 'react';

interface BackgroundProps {
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className={`bg-white`}>
      {children}
    </div>
  );
};

export default Background;
