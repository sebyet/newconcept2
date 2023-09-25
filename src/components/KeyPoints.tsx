import { useTranslation } from "react-i18next";
import headerImage from '../images/header.jpg';

const KeyPoints = () => {
  const { t } = useTranslation("translation");
  return (
    <section className='py-12 md:py-12 bg-gray-100'>
      <div className='container mx-auto'>
        <div className='mx-auto lg:max-w-none'>
          <div className='grid gap-2 sm:gap-10 grid-cols-1 sm:grid-cols-2'>
            <div className='bg-white p-5 rounded-2xl w-full mb-10 lg:mb-0'>
              <div className='pr-10 xl:pr-20 mx-auto'>
                <div className='flex w-12 h-12 mb-5 items-center justify-center bg-black rounded-2xl'>      
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                </div>
                <h4 className='text-4xl tracking-tight mb-6'>{t("digitalKeyPoints.continuousInnovation.title")}</h4>
                <p className='text-gray-600'>
                  {t("digitalKeyPoints.continuousInnovation.description")}
                </p>
              </div>
            </div>
            <div className='bg-white p-5 rounded-2xl w-full mb-10 lg:mb-0'>
              <div className='pr-10 xl:pr-20 mx-auto'>
                <div className='flex w-12 h-12 mb-5 items-center justify-center bg-black rounded-2xl'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                </div>
                <h4 className='text-4xl tracking-tight mb-6'>{t("digitalKeyPoints.agileMethodologies.title")}</h4>
                <p className='text-gray-600'>
                  {t("digitalKeyPoints.agileMethodologies.description")}
                </p>
              </div>
            </div>
            <div className='bg-white p-5 rounded-2xl w-full mb-10 lg:mb-0'>
              <div className='pr-10 xl:pr-20 mx-auto'>
                <div className='flex w-12 h-12 mb-5 items-center justify-center bg-black rounded-2xl'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>

                </div>
                <h4 className='text-4xl tracking-tight mb-6'>{t("digitalKeyPoints.customerCentricity.title")}</h4>
                <p className='text-gray-600'>
                  {t("digitalKeyPoints.customerCentricity.description")}
                </p>
              </div>
            </div>
            <div className='bg-white p-5 rounded-2xl w-full mb-10 lg:mb-0'>
              <div className='xl:pr-20 mx-auto'>
                <div className='flex w-12 h-12 mb-5 items-center justify-center bg-black rounded-2xl'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
                <h4 className='text-4xl tracking-tight mb-6'>{t("digitalKeyPoints.cuttingEdgeTechnologies.title")}</h4>
                <p className='text-gray-600'>
                  {t("digitalKeyPoints.cuttingEdgeTechnologies.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyPoints;
