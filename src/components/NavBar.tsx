import { classNames } from '../utils/functions';

export interface Props {
  active?: string;
}
const NavBar = ({ active }: Props) => {
  const navItems = [
    { id: '00', name: 'home' },
    { id: '01', name: 'destination' },
    { id: '02', name: 'crew' },
    { id: '03', name: 'technology' },
  ];
  return (
    <>
      <nav className="hidden md:px-12 lg:pl-[123px] h-24 w-full md:block bg-white/[0.04] backdrop-blur-[40.774227142333984px]">
        <ul className="flex items-center gap-12 x-large:gap-[3.12rem] h-full">
          {navItems.map((item) => (
            <li className="h-full" key={item.name}>
              <a
                href={item.name === 'home' ? '/' : `/${item.name}`}
                className={classNames(
                  active === item.name ? 'border-white' : 'border-transparent',
                  'uppercase text-base h-full  flex border-b-[3px] items-center gap-[0.6875rem] hover:border-[#ffffff80]  text-white transition-all duration-500 ease-in-out font-barlow-condensed'
                )}
              >
                <span className="hidden font-bold lg:inline-block">
                  {item.id}
                </span>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="relative block md:hidden">
        <button id="navBarBtnOpen">
          <img src="/assets/shared/icon-hamburger.svg" />
        </button>
        <nav
          id="navBar"
          className="translate-x-full fixed top-0 right-0 bottom-0 h-screen w-[67.73%] backdrop-blur-[40.774227142333984px] bg-white/[0.04] pl-8 transition-all duration-500 ease-in-out"
        >
          <div className="flex justify-end mt-[33.95px] mr-[26.45px] pb-[59.95px]">
            <button id="navBarBtnClose">
              <img src="/assets/shared/icon-close.svg" />
            </button>
          </div>
          <ul className="flex flex-col gap-[19px]">
            {navItems.map((item) => (
              <li className="h-full" key={item.name}>
                <a
                  href={item.name === 'home' ? '/' : `/${item.name}`}
                  className={classNames(
                    active === item.name
                      ? 'border-white'
                      : 'border-transparent',
                    'uppercase text-base h-full py-1 flex border-r-[3px] items-center gap-2 hover:border-[#ffffff80]  text-white transition-all duration-500 ease-in-out'
                  )}
                >
                  <span className="font-bold">{item.id}</span>
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
