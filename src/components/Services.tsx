import { useTranslation } from "react-i18next"; // Import the useTranslation hook from react-i18next


const Services = () => {
  const { t } = useTranslation(); // Initialize the useTranslation hook

  return (
    <><section className='relative py-12 md:py-24 overflow-hidden'>
      <div className='container mx-auto px-4 relative'>
        <h1 className='font-heading text-6xl md:text-10xl tracking-tighter mb-24'>
          {t("services.title")} {/* Replace static text with translation key */}
        </h1>
        <a
          className='relative group block xl:flex pb-8 mb-10 items-end border-b bg-white rounded-2xl py-10 px-10'
          href='/services/digital'
        >
          <div className='mb-8 xl:mb-0'>
            <h3 className='text-4xl xs:text-6xl lg:text-7xl inline-block pb-2 border-b-3 border-transparent group-hover:text-blue-500 transition duration-150'>
              {t("services.digital")} {/* Replace static text with translation key */}
            </h3>
          </div>
          <div className='max-w-md text-left mb-8 xl:mb-0 ml-auto xl:mr-20'>
            <p>
              {t("services.digitalDescription")} {/* Replace static text with translation key */}
            </p>
          </div>
          <div className='text-right'>
            <span className='inline-block group-hover:rotate-45 transform transition duration-100'>
              <svg
                width={33}
                height={33}
                viewBox='0 0 33 33'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M30 3L3 30'
                  stroke='black'
                  strokeWidth='4.3875'
                  strokeMiterlimit={10}
                  strokeLinecap='round'
                  strokeLinejoin='round' />
                <path
                  d='M30 27.758V3H5.24196'
                  stroke='black'
                  strokeWidth='4.3875'
                  strokeMiterlimit={10}
                  strokeLinecap='round'
                  strokeLinejoin='round' />
              </svg>
            </span>
          </div>
        </a>
        <a
          className='relative group block xl:flex pb-8 mb-10 items-end border-b bg-white rounded-2xl py-10 px-10'
          href='/services/marketing&sales'
        >
          <div className='mb-8 xl:mb-0'>
            <h3 className='text-4xl xs:text-6xl lg:text-7xl inline-block pb-2 border-b-3 border-transparent group-hover:text-blue-500 transition duration-150'>
              {t("services.customer")} {/* Replace static text with translation key */}
            </h3>
          </div>
          <div className='max-w-md text-left mb-8 xl:mb-0 ml-auto xl:mr-20'>
            <p>
              {t("services.customerDescription")} {/* Replace static text with translation key */}
            </p>
          </div>
          <div className='text-right'>
            <span className='inline-block group-hover:rotate-45 transform transition duration-100'>
              <svg
                width={33}
                height={33}
                viewBox='0 0 33 33'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M30 3L3 30'
                  stroke='black'
                  strokeWidth='4.3875'
                  strokeMiterlimit={10}
                  strokeLinecap='round'
                  strokeLinejoin='round' />
                <path
                  d='M30 27.758V3H5.24196'
                  stroke='black'
                  strokeWidth='4.3875'
                  strokeMiterlimit={10}
                  strokeLinecap='round'
                  strokeLinejoin='round' />
              </svg>
            </span>
          </div>
        </a>
        <a
          className='relative group block xl:flex pb-8 mb-10 items-end border-b bg-white rounded-2xl py-10 px-10'
          href='/services/businesses'
        >
          <div className='mb-8 xl:mb-0'>
            <h3 className='text-4xl xs:text-6xl lg:text-7xl inline-block border-b-3 border-transparent group-hover:text-blue-500 transition duration-150'>
              {t("services.businesses")} {/* Replace static text with translation key */}
            </h3>
          </div>
          <div className='max-w-md text-left mb-8 xl:mb-0 ml-auto xl:mr-20'>
            <p>
              {t("services.businessesDescription")} {/* Replace static text with translation key */}
            </p>
          </div>
          <div className='text-right'>
            <span className='inline-block group-hover:rotate-45 transform transition duration-100'>
              <svg
                width={33}
                height={33}
                viewBox='0 0 33 33'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M30 3L3 30'
                  stroke='black'
                  strokeWidth='4.3875'
                  strokeMiterlimit={10}
                  strokeLinecap='round'
                  strokeLinejoin='round' />
                <path
                  d='M30 27.758V3H5.24196'
                  stroke='black'
                  strokeWidth='4.3875'
                  strokeMiterlimit={10}
                  strokeLinecap='round'
                  strokeLinejoin='round' />
              </svg>
            </span>
          </div>
        </a>
      </div>
    </section>
   </>
  );
};

export default Services;