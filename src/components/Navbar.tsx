import logo from '../images/logo_newconcept.png';
import { useTranslation } from 'react-i18next';
const menuItems = [
  { textKey: 'navbar.about', path: '/about-us' },
  { textKey: 'navbar.digital', path: '/services/digital' },
  { textKey: 'navbar.marketing&sales', path: '/services/marketing&sales' },
  { textKey: 'navbar.businesses', path: '/services/businesses' },
];

const Navbar = () => {
  const { t } = useTranslation('translation');
  return (
    <section className='relative pb-10 bg-coolGray-50 overflow-hidden'>
      <nav>
        <div className='container mx-auto'>
          <div className='flex h-24 items-between'>
            <a className='inline-block' href='/'>
              <img className='h-10' src={logo.src} alt='' />
            </a>
            <div className='hidden lg:flex ml-auto mr-12 items-center'>
              {menuItems.map((menuItem, index) => (
                <a
                  key={index}
                  className='inline-block hover:underline mr-10'
                  href={menuItem.path}
                >
                   {t(menuItem.textKey)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
