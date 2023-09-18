import React, { type ReactNode } from 'react';

interface MyComponentProps {
  children: ReactNode;
  href: string;
}

const Link: React.FC<MyComponentProps> = ({ children, href }) => {
  return (
    <a href={href} className={"hover:underline 'text-blue-600"}>
      {children}
    </a>
  );
};

export default Link;