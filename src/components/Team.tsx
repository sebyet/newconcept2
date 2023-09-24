import headerImage from '../images/header.jpg';
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
        <div className='flex-shrink-0 mr-8 w-full max-w-md bg-white rounded-2xl pb-5'>
          <img
            className='block w-full mb-8 rounded-2xl'
            src={headerImage.src}
            alt=''
          />
          <div className='max-w-sm px-5'>
            <span className='text-sm text-coolGray-600'>
              Director of Marketing
            </span>
            <h4 className='text-3xl mt-1'>Robert Fox</h4>
          </div>
        </div>
        <div className='flex-shrink-0 mr-8 w-full max-w-md bg-white rounded-2xl pb-5'>
          <img
            className='block w-full mb-8 rounded-2xl'
            src={headerImage.src}
            alt=''
          />
          <div className='max-w-sm px-5'>
            <span className='text-sm text-coolGray-600'>
              Director of Marketing
            </span>
            <h4 className='text-3xl mt-1'>Robert Fox</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
   </>
  );
};

export default Team;