import BackgroundImage from "./BackgroundImage";
import H1 from "./Base/H1";
import Paragraph from "./Base/Paragraph";
import headerImage from '../images/header.jpg'

const Header = () => {
  return (
      <BackgroundImage imageSource={headerImage.src}>
        <div className=" min-h-[calc(100vh-80px)] flex flex-col justify-end p-5 md:px-52 py-20">
          <H1 classNames={"text-white mb-5 md:mb-10"} >Unlocking Digital Potential, Crafting Marketing Excellence, Elevating Business Concepts.</H1>
          <a href="#" className="text-blue-500 no-underline hover:underline">Discover how we can work Together</a>
        </div>
      </BackgroundImage>
  );
};

export default Header;