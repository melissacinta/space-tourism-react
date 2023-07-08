import NavBar from './NavBar';

export interface Props {
  active: string;
}
const Header = ({ active }: Props) => {
  return (
    <div className="fixed top-0 right-0 left-0 pt-6 pr-6 md:pr-0 md:pt-0 lg:pt-10 pl-6 md:pl-9 lg:pl-14 flex items-center">
      <div>
        <a href="/">
          <img src="/logo.png" alt="sapce tourism" />
        </a>
      </div>
      <div className="md:min-w-[61.7284%] lg:min-w-[59.9278%] x-large:min-w-[51.875rem] ml-auto relative">
        <span
          className="hidden absolute lg:inline-block w-[57.03%] h-[1px] bg-white/[25.15%] -left-[54%] z-10 top-11"
          aria-hidden="true"
        ></span>
        <NavBar active={active} />
      </div>
    </div>
  );
};

export default Header;
