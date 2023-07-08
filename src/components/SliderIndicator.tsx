import { classNames } from '../utils/functions';
interface Props {
  active?: boolean;
}
const SliderIndicator = ({ active }: Props) => {
  const navItems = ['00', '01', '02', '03'];
  return (
    <nav className="w-full">
      <ul className="flex items-center gap-4 h-full">
        {navItems.map(() => (
          <li className="h-full">
            <span
              className={classNames(
                active
                  ? 'border-white text-white'
                  : 'border-transparent text-secondary',
                'uppercase block text-base h-2.5 w-2.5 rounded-full bg-white/[17.44%] hover:bg-white/[50.01%] transition-all duration-300'
              )}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SliderIndicator;
