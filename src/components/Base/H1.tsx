import React, { type ReactNode } from 'react';

interface MyComponentProps {
  children: ReactNode;
  classNames?: string;
}

const H1: React.FC<MyComponentProps> = ({ children, classNames  }) => {
  return (
    <h1 className={`scroll-m-20 text-xl md:text-4xl font-extrabold tracking-tight lg:text-5xl ${classNames}`}>
      {children}
    </h1>
  );
};

export default H1;