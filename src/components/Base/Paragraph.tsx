import React, { type ReactNode } from 'react';

interface MyComponentProps {
  children: ReactNode;
  className?: string; // optional className prop
}

const Paragraph: React.FC<MyComponentProps> = ({ children, className }) => {
  return (
    <p className={`leading-7 ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;