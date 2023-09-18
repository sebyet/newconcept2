import React, { type ReactNode } from 'react';

interface MyComponentProps {
  children: ReactNode;
  className?: string; // optional className prop
}

const H3: React.FC<MyComponentProps> = ({ children, className }) => {
  return (
    <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}>
      {children}
    </h3>
  );
};

export default H3;