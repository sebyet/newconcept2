import H1 from "./Base/H1";
import H2 from "./Base/H2";
import H3 from "./Base/H3";
import Paragraph from "./Base/Paragraph";

const Services = () =>  {
  return (
      <div className="bg-white mx-auto p-5 md:p-20">
        <H2 classNames="mb-10">How can Newconcept help you?</H2>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-start-1 col-end-13 md:col-start-1 md:col-end-5 p-5 text-start flex flex-col rounded-md w-full h-full bg-slate-50 shadow-xs hover:shadow-md">
            <div className="mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
            </div>
            <H3 className="mb-5">Unlocking Digital Potential</H3>
            <Paragraph className="text-gray-500"> Leveraging our wealth of experience and passion for innovation to empower your business for the digital age and keep you steps ahead of the curve.</Paragraph>
          </div>
          <div className="col-start-1 col-end-13 md:col-start-5 md:col-end-9 p-5 text-start flex flex-col rounded-md w-full h-full bg-slate-50 shadow-xs hover:shadow-md">
            <img></img>
            <H3>test</H3>
            <Paragraph>tests</Paragraph>
          </div>
          <div className="col-start-1 col-end-13 md:col-start-9 md:col-end-13 p-5 text-start flex flex-col rounded-md w-full h-full bg-slate-50 shadow-xs hover:shadow-md">
            <img></img>
            <H3>test</H3>
            <Paragraph>tests</Paragraph>
          </div>
          <div className="col-start-1 col-end-13 p-5 text-start flex flex-col rounded-md w-full h-full bg-slate-50 shadow-xs hover:shadow-md">
            <img></img>
            <H3>test</H3>
            <Paragraph>tests</Paragraph>
          </div>
       
        </div>
      </div>
  );
};

export default Services;