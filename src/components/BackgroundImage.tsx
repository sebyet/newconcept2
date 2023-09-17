import React, { type ReactNode } from 'react';

interface BackgroundImageProps {
  children: ReactNode;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ children }) => {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60)" }}>
      <div className="top-0 left-0 -z-10 bg-black bg-opacity-40">
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;
