import Background from "./Background";
import { Button } from "./Base/Button";
import H1 from "./Base/H1";
import Paragraph from "./Base/Paragraph";



const Service = () => {
  return (
    <Background>
      <div className="flex flex-col justify-center items-center w-full h-96 gap-5">
        <H1>test</H1>
        <Paragraph>This is a test</Paragraph>
        <Button>Button</Button>
      </div>
    </Background>
  );
};

export default Service;