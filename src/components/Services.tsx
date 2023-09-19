import H1 from "./Base/H1";
import H2 from "./Base/H2";
import H3 from "./Base/H3";
import Paragraph from "./Base/Paragraph";
import servicesImage from '../images/service.jpg'
import { Image } from 'astro:assets';

const Services = () =>  {
  return (
      <div className="bg-white mx-auto p-5 md:px-52 md:py-20">
        <H2 classNames="mb-10">How can Newconcept help you?</H2>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-start-1 col-end-13 md:col-start-1 md:col-end-5 p-5 text-start flex flex-col rounded-md w-full h-full border border-slate-50 bg-slate-50 shadow-xs hover:border-blue-500">
            <div className="mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
            <H3 className="mb-5">Unlocking Digital Potential</H3>
            <Paragraph className="text-gray-500">Transform your business into a cutting-edge digital powerhouse with our expert guidance. At Newconcept, we leverage the latest technologies and strategies to drive innovation, streamline operations, and ensure your company stays ahead in the digital race.</Paragraph>
          </div>
          <div className="col-start-1 col-end-13 md:col-start-5 md:col-end-9 p-5 text-start flex flex-col rounded-md w-full h-full border border-slate-50 bg-slate-50 shadow-xs hover:border-blue-500">
            <div className="mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            </div>
            <H3 className="mb-5">Crafting Marketing Exellence</H3>
            <Paragraph className="text-gray-500">Elevate your brand to new heights with our strategic marketing solutions. Our data-driven approach and creative brilliance will craft compelling narratives, engage your audience, and maximize your ROI, ensuring your brand stands out in a crowded marketplace.</Paragraph>
          </div>
          <div className="col-start-1 col-end-13 md:col-start-9 md:col-end-13 p-5 text-start flex flex-col rounded-md w-full h-full border border-slate-50 bg-slate-50 shadow-xs hover:border-blue-500">
            <div className="mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
            </div>
            <H3 className="mb-5">Drive Revenue Like Never Before</H3>
            <Paragraph className="text-gray-500">Turbocharge your sales with our results-driven approach. Our tailored strategies, sales funnel optimization, and cutting-edge tools will boost your conversion rates and revenue, making your business a sales powerhouse in today's competitive landscape.</Paragraph>
          </div>
          <div className="col-start-1 col-end-13 p-5 text-start flex flex-col rounded-md w-full h-full border-slate-50 border bg-slate-50 shadow-xs hover:border-blue-500">
              <div className="mb-5 flex gap-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
              </div>
            <H3 className="mb-5">Breathe Life into Your Vision</H3>
            <Paragraph className="text-gray-500">Newconcept's holistic approach combines our expertise in digital transformation, marketing, and sales to become your partner in business or project creation. We seamlessly integrate all competencies to nurture your idea from conception to success, ensuring a powerful market entry and sustainable growth.</Paragraph>
          </div>
        </div>
      </div>
  );
};

export default Services;