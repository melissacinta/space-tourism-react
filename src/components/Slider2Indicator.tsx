import { classNames } from '../utils/functions';

export interface Props {
  active?: boolean;
}
const Slider2Indicator = ({ active }: Props) => {
  const navItems = ['1', '2', '3'];
  return (
    <nav className="w-full">
      <div className="slider-nav flex justify-center items-center lg:items-start lg:flex-col gap-4 lg:gap-8 h-full">
        {navItems.map((item) => (
          <div className="h-full">
            <span
              className={classNames(
                active
                  ? 'border-white text-primary bg-white hover:text-white'
                  : 'border-white/25 text-white bg-white/[17.44%] hover:border-white',
                'border uppercase font-bellefair flex justify-center items-center text-base md:text-2xl lg:text-[2rem] h-10 w-10 md:h-[3.75rem] md:w-[3.75rem] lg:h-20 lg:w-20 rounded-full hover:bg-transparent transition-all duration-500'
              )}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Slider2Indicator;
