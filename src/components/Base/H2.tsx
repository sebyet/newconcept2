import React, { ReactNode } from 'react';

interface MyComponentProps {
  children: ReactNode;
  classNames?: string;
}

const H2: React.FC<MyComponentProps> = ({ children, classNames }) => {
  return (
    <h2 className={`scroll-m-20 text-3xl font-semibold tracking-tight transition-colors ${classNames}`}>
      {children}
    </h2>
  );
};

export default H2;