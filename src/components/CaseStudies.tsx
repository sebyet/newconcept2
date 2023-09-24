import H1 from "./Base/H1";
import H2 from "./Base/H2";
import H3 from "./Base/H3";
import Paragraph from "./Base/Paragraph";
import servicesImage from '../images/service.jpg'
import { Image } from 'astro:assets';

const CaseStudies = () =>  {
  return (
    <>
    <section className='py-12 md:py-24 overflow-hidden'>
    <div className='container mx-auto px-4'>
      <h1 className='font-heading text-6xl xs:text-8xl sm:text-10xl tracking-tighter mb-20'>
        Case Studies
      </h1>
      <div className='max-w-2xl mx-auto sm:max-w-none'>
        <div className='flex flex-wrap -mx-1.5'>
          <div className='w-full lg:w-1/2 px-1.5 mb-4 xl:mb-0'>
            <div className='h-full border rounded-2xl bg-white'>
              <img
                className='block mb-16 w-full h-88 rounded-2xl object-cover'
                src='https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
                alt=''
              />
              <div className='px-6 max-w-lg mx-auto pb-16 text-center'>
                <span className='relative inline-block mb-3 py-2 px-3 text-sm text-white leading-none bg-black rounded-full transition duration-200'>
                  Interior
                </span>
                <span className='block text-4xl mb-4'>
                  Planning strategies
                </span>
                <p className='mb-8'>htdhtdhgdfbvsùdjnbml</p>
                <a
                  className='group inline-flex items-center leading-none font-medium pb-2 border-b-2 border-black'
                  href='#'
                >
                  <span className='mr-4'>See all projects</span>
                  <span className='group-hover:rotate-45 transform transition duration-100'>
                    <svg
                      width={11}
                      height={11}
                      viewBox='0 0 11 11'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M9.5 1.5L1.5 9.5'
                        stroke='black'
                        strokeWidth='1.3'
                        strokeMiterlimit={10}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M9.5 8.83571V1.5H2.16429'
                        stroke='black'
                        strokeWidth='1.3'
                        strokeMiterlimit={10}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2 px-1.5'>
            <a className='group block mb-3 border rounded-2xl bg-white' href='#'>
              <div className='flex flex-wrap justify-between bg-white rounded-2xl'>
                <div className='w-full md:w-7/12 pl-6 sm:pl-12 pr-5 py-10 self-center'>
                  <div className='max-w-xs py-18'>
                    <span className='inline-block mb-3 py-2 px-3 text-sm text-black group-hover:text-white leading-none border-1.5 border-black group-hover:bg-black rounded-full transition duration-200'>
                      Interior
                    </span>
                    <span className='block text-4xl mb-4'>
                      Return on investment
                    </span>
                    <p>
                      We follow the RIBA Plan of Work 2020 to ensure an
                      orderly framework and project clarity from the
                      outset. First, we conduct
                    </p>
                  </div>
                </div>
                <div className='w-full md:w-5/12 md:transform group-hover:translate-x-4 transition duration-500'>
                  <img
                    className='block w-full h-full rounded-2xl object-cover'
                    src='https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
                    alt=''
                  />
                </div>
              </div>
            </a>
            <a className='group block border rounded-2xl bg-white' href='#'>
              <div className='flex flex-wrap justify-between'>
                <div className='w-full md:w-7/12 pl-6 sm:pl-12 pr-5 py-10 self-center'>
                  <div className='max-w-xs py-18'>
                    <span className='inline-block mb-3 py-2 px-3 text-sm text-black group-hover:text-white leading-none border-1.5 border-black group-hover:bg-black rounded-full transition duration-200'>
                      Interior
                    </span>
                    <span className='block text-4xl mb-4'>
                      Return on investment
                    </span>
                    <p>
                      We follow the RIBA Plan of Work 2020 to ensure an
                      orderly framework and project clarity from the
                      outset. First, we conduct
                    </p>
                  </div>
                </div>
                <div className='w-full md:w-5/12 md:transform group-hover:translate-x-4 transition duration-500'>
                  <img
                    className='block w-full h-full rounded-2xl object-cover'
                    src='https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
                    alt=''
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
   </>
  );
};

export default CaseStudies;