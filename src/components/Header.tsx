import BackgroundImage from "./BackgroundImage";
import H1 from "./Base/H1";

const Header = ({ }) => {
  return (
    <BackgroundImage>
        <div className="flex flex-col justify-between w-full h-screen z-auto p-16">
            <div className="flex flex-col gap-5">
                <H1>test</H1>
                <div className="flex gap-5">
                  test
                </div>
            </div>
        </div>
    </BackgroundImage>
  );
}

export default Header;