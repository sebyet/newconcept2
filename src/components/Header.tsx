import { useTranslation } from "react-i18next";

import headerImage from '../images/header.jpg';

const Header = () => {
  const { t } = useTranslation("translation");
  return (
    <div className='container mx-auto px-4'>
      <div className='flex flex-wrap -mx-4'>
        <div className='w-full lg:w-5/12 px-4 mb-6 lg:mb-0'>
          <div className='flex flex-col h-full'>
            <div className='py-10 px-10 h-full flex flex-col gap-1 bg-white rounded-2xl'>
              <h1 className='font-heading text-3xl sm:text-5xl mb-4 tracking-tighter'>
                {t("home.header.digital")}
              </h1>
              <h1 className='font-heading text-3xl sm:text-5xl mb-4 tracking-tighter'>
                {t("home.header.customer")}
              </h1>
              <h1 className='font-heading text-3xl text-blue-500 sm:text-5xl mb-4 tracking-tighter'>
                {t("home.header.business")}
              </h1>
              <div className="mt-auto flex gap-2 flex-wrap">
                <span className='relative inline-block mb-3 py-2 px-3 text-sm text-black leading-none bg-gray-100 rounded-full'>
                  {t("home.header.customerJourney")} {/* Replace static text with translation key */}
                </span>
                <span className='relative inline-block mb-3 py-2 px-3 text-sm text-black leading-none bg-gray-100 rounded-full'>
                  {t("home.header.ideaGeneration")} {/* Replace static text with translation key */}
                </span>
                <span className='relative inline-block mb-3 py-2 px-3 text-sm text-black leading-none bg-gray-100 rounded-full'>
                  {t("home.header.mvpDevelopment")} {/* Replace static text with translation key */}
                </span>
                <span className='relative inline-block mb-3 py-2 px-3 text-sm text-black leading-none bg-gray-100 rounded-full'>
                  {t("home.header.agileTransformation")} {/* Replace static text with translation key */}
                </span>
                <span className='relative inline-block mb-3 py-2 px-3 text-sm text-black leading-none bg-gray-100 rounded-full'>
                  {t("home.header.businessModelInnovation")} {/* Replace static text with translation key */}
                </span>
                <span className='relative inline-block mb-3 py-2 px-3 text-sm text-black leading-none bg-gray-100 rounded-full'>
                  {t("home.header.remoteWorkingCollaboration")} {/* Replace static text with translation key */}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-7/12 px-4'>
          <div className='relative h-full'>
            <img
              className='block h-full w-full rounded-2xl object-cover'
              src={headerImage.src}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
