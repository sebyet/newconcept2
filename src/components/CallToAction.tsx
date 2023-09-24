
const CallToAction = () =>  {
  return (
    <>
    <section className='py-12 md:py-24 bg-black'>
    <div className='container mx-auto px-4'>
      <div className='max-w-lg mx-auto lg:max-w-none'>
        <div className='flex flex-wrap -mx-4 items-center'>
          <div className='w-full lg:w-1/2 px-4 mb-12 lg:mb-0'>
            <div className='max-w-lg xl:max-w-none'>
              <span className='block mb-4 text-sm text-white'>
                Lorem Ipsum
              </span>
              <h1 className='font-heading text-5xl md:text-6xl 2xl:text-8xl text-white tracking-tighter mb-8'>
                Share your travels with friends &amp; family
              </h1>
              <p className='xl:text-lg text-coolGray-500'>
                It is a long established fact that a reader will be
                distracted by the
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/2 px-4'>
            <div className='flex flex-col sm:flex-row flex-wrap lg:justify-end'>
              <a
                className='group inline-flex mb-3 sm:mb-0 sm:mr-6 py-5 px-8 text-black hover:text-white leading-none items-center justify-center bg-white hover:bg-blue-500 rounded-full transition duration-150'
                href='#'
              >
                <span className='mr-2.5'>Get consulation</span>
                <span className='group-hover:rotate-45 transform transition duration-75'>
                  <svg
                    width={10}
                    height={11}
                    viewBox='0 0 10 11'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9 1.5L1 9.5'
                      stroke='currentColor'
                      strokeWidth='1.3'
                      strokeMiterlimit={10}
                      strokeLinecap='round'
                      strokeLinejoin='round' />
                    <path
                      d='M9 8.83571V1.5H1.66429'
                      stroke='currentColor'
                      strokeWidth='1.3'
                      strokeMiterlimit={10}
                      strokeLinecap='round'
                      strokeLinejoin='round' />
                  </svg>
                </span>
              </a>
              <a
                className='group inline-flex py-5 px-8 text-white hover:text-black leading-none items-center justify-center border-1.5 border-white hover:bg-white rounded-full transition duration-150'
                href='#'
              >
                <span className='mr-2.5'>Get consulation</span>
                <span className='group-hover:rotate-45 transform transition duration-75'>
                  <svg
                    width={10}
                    height={11}
                    viewBox='0 0 10 11'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9 1.5L1 9.5'
                      stroke='currentColor'
                      strokeWidth='1.3'
                      strokeMiterlimit={10}
                      strokeLinecap='round'
                      strokeLinejoin='round' />
                    <path
                      d='M9 8.83571V1.5H1.66429'
                      stroke='currentColor'
                      strokeWidth='1.3'
                      strokeMiterlimit={10}
                      strokeLinecap='round'
                      strokeLinejoin='round' />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   </>
  );
};

export default CallToAction;