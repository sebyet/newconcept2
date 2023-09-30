import React from 'react';
import { useTranslation } from 'react-i18next';

// Define TypeScript types for a single key point
interface KeyPointProps {
  title: string;
  description: string;
  icon: string;
}

// Create a reusable KeyPoint component
const KeyPoint: React.FC<KeyPointProps> = ({ title, description, icon }) => {
  const { t } = useTranslation('translation');

  return (
    <div className='bg-white p-5 rounded-2xl w-full mb-10 lg:mb-0'>
      <div className='pr-10 xl:pr-20 mx-auto'>
        <div className='flex w-12 h-12 mb-5 items-center justify-center bg-black rounded-2xl'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d={icon} />
          </svg>
        </div>
        <h4 className='text-4xl tracking-tight mb-6'>{t(title)}</h4>
        <p className='text-gray-600'>{t(description)}</p>
      </div>
    </div>
  );
};

interface KeyPointsProps {
  keyPoints: KeyPointProps[];
}

const KeyPoints: React.FC<KeyPointsProps> = ({ keyPoints }) => {
  return (
    <section className='py-12 md:py-12 bg-gray-100'>
      <div className='container mx-auto'>
        <div className='mx-auto lg:max-w-none'>
          <div className='grid gap-2 sm:gap-10 grid-cols-1 sm:grid-cols-2'>
            {keyPoints.map((point, index) => (
              <KeyPoint
                key={index}
                title={point.title}
                description={point.description}
                icon={point.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyPoints;




