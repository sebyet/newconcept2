import React, { type ReactNode } from 'react';

interface BackgroundImageProps {
  children: ReactNode;
  imageSource: string,
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ children, imageSource }) => {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${imageSource})` }}>
      <div className="top-0 left-0 -z-10 bg-black bg-opacity-40">
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;
