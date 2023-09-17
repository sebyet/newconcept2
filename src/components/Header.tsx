import BackgroundImage from "./BackgroundImage";
import H1 from "./Base/H1";
import Paragraph from "./Base/Paragraph";

const Header = () => {
  return (
      <BackgroundImage>
        <div className=" min-h-[calc(100vh-80px)] flex flex-col justify-end p-20">
          <h1 className="scroll-m-20 mb-10 text-4xl font-extrabold tracking-tight lg:text-5xl">This is the title</h1>
          <div className="flex flex-col items-end md:flex-row gap-5">
            <div className="flex flex-col gap-1">
                <Paragraph>Subtitle 1</Paragraph>
                <a href="#" className="text-blue-500 no-underline hover:underlin">Link</a>
            </div>
            < div className="flex flex-col gap-1">
                <Paragraph>Subtitle 1</Paragraph>
                <a href="#" className="text-blue-500 no-underline hover:underline">Link</a>
            </div>
          </div>
        </div>
      </BackgroundImage>
  );
};

export default Header;