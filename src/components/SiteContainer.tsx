import React, { type ReactNode } from 'react';

type SiteContainerProps = {
  children: ReactNode;
};

const SiteContainer: React.FC<SiteContainerProps> = ({ children }) => {
  return (
    <div className='bg-gray-100'>
      {children}
    </div>
  );
};

export default SiteContainer;
