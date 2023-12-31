import React from 'react';
import { useTranslation } from 'react-i18next';

interface HeaderDetailPageProps {
  imageSource: string;
  title: string;
}

const HeaderDetailPage: React.FC<HeaderDetailPageProps> = ({ imageSource, title }) => {
  return (
    <section className='relative pb-5 bg-gray-100 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='relative flex flex-wrap -mx-3 mb-5'>
          <div className='w-full flex-1 px-3 mb-6 lg:mb-0'>
            <img
              className='block w-full h-40 md:h-52 lg:h-67 rounded-2xl object-cover'
              src={imageSource}
              alt=''
            />
          </div>
        </div>
        <div className='relative max-w-5xl mx-auto text-center'>
          <h1
            className='font-heading text-6xl sm:text-9xl lg:text-11xl xl:text-12xl tracking-tightest'
            style={{ letterSpacing: '-0.04em' }}
          >
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeaderDetailPage;

