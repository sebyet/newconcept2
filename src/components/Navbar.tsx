import H1 from './Base/H1';
import { Button } from './Base/Button';

const Navbar = () => {
    return (
      <nav className="sticky p-5 top-0 bg-white z-20 flex justify-between items-center w-full shadow-xs">
        <div className="flex items-center">
          <img
            src="https://th.bing.com/th/id/R.9c5bbf564285a089abbcf38bb1db9c10?rik=x3UQDF3o8g5rsA&pid=ImgRaw&r=0"
            alt="Logo"
            className="h-8 mr-3"
          />
        </div>
        <div className="hidden md:flex md:items-center md:justify-center">
          <a href="#" className="mx-4">Expertise</a>
          <a href="#" className="mx-4">A Propos de nous</a>
        </div>
        <div className="flex items-center">
          <a>EN</a>
          <Button className="ml-4">Contact</Button>
        </div>
    </nav>
    );
  };

export default Navbar;