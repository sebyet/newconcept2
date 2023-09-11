import H1 from './Base/H1';
import { Button } from './Base/Button';

const Navbar = () => {
    return (
      <div className={`pt-5 flex justify-between items-center w-full`}>
        <H1>Test</H1>
        <Button>Contact</Button>
      </div>
    );
  };

export default Navbar;