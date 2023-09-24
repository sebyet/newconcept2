import logo from '../images/logo_newconcept_white.png'

const Footer = ({ }) => {
  return (
    <><section className='py-12 md:py-20 bg-black'>
    <div className='container mx-auto px-4'>
      <div className='flex flex-wrap -mx-4 mb-16'>
        <div className='w-full lg:w-4/12 xl:w-5/12 px-4 mb-8 lg:mb-0'>
          <a className='inline-block' href='#'>
            <img
              style={{ height: 50 }}
              src={logo.src}
              alt=''
            />
          </a>
        </div>
        <div className='w-full lg:w-8/12 xl:w-7/12 px-4'>
          <ul className='flex flex-wrap -mb-2 items-center lg:justify-end'>
            <li className='mb-2 mr-14'>
              <a
                className='inline-block text-white hover:text-coolGray-400'
                href='#'
              >
                Contact
              </a>
            </li>
            <li className='mb-2 mr-14'>
              <a
                className='inline-block text-white hover:text-coolGray-400'
                href='#'
              >
                Blog
              </a>
            </li>
            <li className='mb-2 mr-14'>
              <a
                className='inline-block text-white hover:text-coolGray-400'
                href='#'
              >
                Our Storry
              </a>
            </li>
            <li className='mb-2 mr-14'>
              <a
                className='inline-block text-white hover:text-coolGray-400'
                href='#'
              >
                Careers
              </a>
            </li>
            <li className='mb-2 mr-14'>
              <a
                className='inline-block text-white hover:text-coolGray-400'
                href='#'
              >
                Support
              </a>
            </li>
            <li className='mb-2'>
              <a
                className='inline-block text-white hover:text-coolGray-400'
                href='#'
              >
                Guides
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-wrap -mx-4 items-center'>
        <div className='w-full sm:w-1/2 px-4 mb-6 sm:mb-0'>
          <span className='text-sm text-white'>
            © 2023 Realestate.co
          </span>
        </div>
        <div className='w-full sm:w-1/2 px-4 sm:text-right'>
          <div className='-mb-2'>
            <a
              className='inline-block text-sm mb-2 mr-12 text-white'
              href='#'
            >
              Terms of Use
            </a>
            <a
              className='inline-block text-sm mb-2 text-white'
              href='#'
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  );
};

export default Footer;