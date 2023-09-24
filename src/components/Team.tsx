import H1 from "./Base/H1";
import H2 from "./Base/H2";
import H3 from "./Base/H3";
import Paragraph from "./Base/Paragraph";
import servicesImage from '../images/service.jpg'
import { Image } from 'astro:assets';

const Team = () =>  {
  return (
    <><section className='py-12 md:py-20 bg-coolGray-50 overflow-hidden'>
    <div className='container mx-auto px-4'>
      <div className='flex flex-wrap -mx-4 items-center mb-20'>
        <div className='w-full lg:w-8/12 xl:w-1/2 px-4 mb-8 lg:mb-0'>
          <h1 className='font-heading text-6xl md:text-10xl tracking-tighter'>
            Meet the team
          </h1>
        </div>
        <div className='w-full lg:w-4/12 xl:w-1/2 px-4'>
          <div className='flex items-center justify-end'>
            <a
              className='inline-flex h-16 sm:h-18 w-16 sm:w-18 mr-8 items-center justify-center text-black hover:text-white hover:bg-black border border-black rounded-full transition duration-200'
              href='#'
            >
              <svg
                width={27}
                height={27}
                viewBox='0 0 27 27'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.7051 7.12817L4.15732 13.6759L10.7051 20.2237'
                  stroke='currentColor'
                  strokeWidth='1.61806'
                  strokeMiterlimit={10}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M22.4941 13.6759H4.33949'
                  stroke='currentColor'
                  strokeWidth='1.61806'
                  strokeMiterlimit={10}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
            <a
              className='inline-flex h-16 sm:h-18 w-16 sm:w-18 items-center justify-center text-black hover:text-white hover:bg-black border border-black rounded-full transition duration-200'
              href='#'
            >
              <svg
                width={27}
                height={27}
                viewBox='0 0 27 27'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.2949 7.12817L22.8427 13.6759L16.2949 20.2237'
                  stroke='currentColor'
                  strokeWidth='1.61806'
                  strokeMiterlimit={10}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M4.50586 13.6759H22.6605'
                  stroke='currentColor'
                  strokeWidth='1.61806'
                  strokeMiterlimit={10}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <div className='flex-shrink-0 mr-8 w-full max-w-md'>
          <img
            className='block w-full mb-8'
            src='asitrastudio-assets/team/photo-vertical1.png'
            alt=''
          />
          <div className='max-w-sm'>
            <span className='text-sm text-coolGray-600'>
              Director of Marketing
            </span>
            <h4 className='text-3xl mt-1'>Leslie Alexander</h4>
          </div>
        </div>
        <div className='flex-shrink-0 mr-8 w-full max-w-md'>
          <img
            className='block w-full mb-8'
            src='asitrastudio-assets/team/photo-vertical2.png'
            alt=''
          />
          <div className='max-w-sm'>
            <span className='text-sm text-coolGray-600'>
              Director of Marketing
            </span>
            <h4 className='text-3xl mt-1 flex-wrap'>Brooklyn Simmons</h4>
          </div>
        </div>
        <div className='flex-shrink-0 mr-8 w-full max-w-md bg-white'>
          <img
            className='block w-full mb-8'
            src='asitrastudio-assets/team/photo-vertical3.png'
            alt=''
          />
          <div className='max-w-sm px-5'>
            <span className='text-sm text-coolGray-600'>
              Director of Marketing
            </span>
            <h4 className='text-3xl mt-1'>Robert Fox</h4>
          </div>
        </div>
        <div className='flex-shrink-0 w-full max-w-md'>
          <img
            className='block w-full mb-8'
            src='asitrastudio-assets/team/photo-vertical2.png'
            alt=''
          />
          <div className='max-w-sm'>
            <span className='text-sm text-coolGray-600'>
              Director of Marketing
            </span>
            <h4 className='text-3xl mt-1'>Leslie Alexander</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className='py-6 bg-black'>
    <div className='container mx-auto px-4'>
      <div className='flex flex-wrap -mx-4'>
        <div className='w-full lg:w-1/2 px-4 order-last lg:order-first'>
          <img
            className='block max-w-lg mx-auto lg:max-w-none h-full w-full rounded-4xl object-cover'
            src='asitrastudio-assets/contacts/map-dark.png'
            alt=''
          />
        </div>
        <div className='w-full lg:w-1/2 px-4'>
          <div className='max-w-lg mx-auto lg:mr-0 pt-14 pb-16 lg:py-24'>
            <h1 className='font-heading text-6xl xs:text-8xl sm:text-9xl xl:text-10xl tracking-tighter text-white mb-8'>
              Let&amp;grave;s talk
            </h1>
            <p className='text-xl text-coolGray-500 mb-16'>
              Whereby Embedded is the easiest way to embed video calls
              directly into your app, website, or anywhere else you need
              beautiful, custom video chat – that just works.
            </p>
            <div className='sm:flex mb-10'>
              <div className='flex h-12 w-12 items-center justify-center border border-coolGray-800 rounded-2xl'>
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeMiterlimit={10}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M15.9945 11H16.0035'
                    stroke='white'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M11.9945 11H12.0035'
                    stroke='white'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M7.99451 11H8.00349'
                    stroke='white'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <div className='mt-6 sm:mt-0 sm:ml-6'>
                <span className='block text-white text-lg font-medium mb-5'>
                  Chat to us
                </span>
                <p className='text-lg text-coolGray-500 mb-1'>
                  Lorem Ipsum is simply dummy text of the
                </p>
                <span className='text-lg font-medium text-white'>
                  contact@example.com
                </span>
              </div>
            </div>
            <div className='sm:flex mb-10'>
              <div className='flex h-12 w-12 items-center justify-center border border-coolGray-800 rounded-2xl'>
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeMiterlimit={10}
                  />
                </svg>
              </div>
              <div className='mt-6 sm:mt-0 sm:ml-6'>
                <span className='block text-white text-lg font-medium mb-5'>
                  Call us
                </span>
                <p className='text-lg text-coolGray-500 mb-1'>
                  Lorem Ipsum is simply dummy text of the
                </p>
                <span className='text-lg font-medium text-white'>
                  +48 291 821 114
                </span>
              </div>
            </div>
            <div className='sm:flex'>
              <div className='flex h-12 w-12 items-center justify-center border border-coolGray-800 rounded-2xl'>
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M11.9989 13.4299C13.722 13.4299 15.1189 12.0331 15.1189 10.3099C15.1189 8.58681 13.722 7.18994 11.9989 7.18994C10.2758 7.18994 8.87891 8.58681 8.87891 10.3099C8.87891 12.0331 10.2758 13.4299 11.9989 13.4299Z'
                    stroke='white'
                    strokeWidth='1.5'
                  />
                  <path
                    d='M3.62166 8.49C5.59166 -0.169998 18.4217 -0.159997 20.3817 8.5C21.5317 13.58 18.3717 17.88 15.6017 20.54C13.5917 22.48 10.4117 22.48 8.39166 20.54C5.63166 17.88 2.47166 13.57 3.62166 8.49Z'
                    stroke='white'
                    strokeWidth='1.5'
                  />
                </svg>
              </div>
              <div className='mt-6 sm:mt-0 sm:ml-6'>
                <span className='block text-white text-lg font-medium mb-5'>
                  Visit us
                </span>
                <p className='text-lg text-coolGray-500 mb-1'>
                  Lorem Ipsum is simply dummy text of the
                </p>
                <span className='block mb-0.5 text-lg font-medium text-white'>
                  6811 Benjamin Franklin Drive,
                </span>
                <span className='text-lg font-medium text-white'>
                  Suite 170Columbia, MD 21046
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   </>
  );
};

export default Team;