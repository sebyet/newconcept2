import React, { type ReactNode } from 'react';

interface BackgroundProps {
  children: ReactNode;
  white?: boolean,
}

const Background: React.FC<BackgroundProps> = ({ children, white }) => {
  const BackgroundColorClass = white ? `bg-white}` : 'bg-slate-50';
  return (
    <div className={`flex flex-col justify-center items-center w-full h-96 gap-5 ${BackgroundColorClass}`}>
      {children}
    </div>
  );
};

export default Background;
