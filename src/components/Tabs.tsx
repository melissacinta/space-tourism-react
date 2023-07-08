import { useState } from 'react';
import { classNames } from '../utils/functions';
const navItems = ['moon', 'mars', 'europa', 'titan'];
interface Props {
  data: Record<string, unknown>[];
}
const Tabs = ({ data }: Props) => {
  const [activeTab, setActiveTab] = useState('moon');
  return (
    <div className="wrapper">
      <div className="h-9 flex justify-center lg:justify-start">
        <ul className="flex items-center gap-7 md:gap-8 h-full">
          {navItems.map((item) => (
            <li className="h-full">
              <button
                className={classNames(
                  item === activeTab ? 'border-white text-white' : '',
                  'tab-button uppercase text-base h-full flex border-b-[3px] items-start gap-2 hover:text-secondary hover:border-[#ffffff80] border-transparent text-secondary'
                )}
                data-id={item}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="contentWrapper">
        {data.map((item) => (
          <div
            className={classNames(
              (item.name as string).toLowerCase() === activeTab
                ? 'block'
                : 'hidden'
            )}
            id={(item.name as string).toLowerCase()}
          >
            <h2 className="text-[3.5rem] leading-[4rem] md:text-[5rem] md:leading-[5.75rem] lg:text-[6.25rem] lg:leading-[7.1875rem] text-white uppercase font-bellefair mt-5 md:mt-9">
              {item.name as string}
            </h2>
            <p className="text-secondary text-[0.9375rem] leading-[1.5625rem] md:text-base md:leading-7 lg:text-lg lg:leading-8 max-w-[20.4375rem] md:max-w-[27.75rem] font-normal">
              {item.description as string}
            </p>
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center lg:justify-start gap-8 md:gap-[4.9375rem] uppercase font-bellefair text-sm leading-[1.0625rem] text-secondary pt-8 mt-8 md:pt-7 border-t border-[#383B4B] md:mt-[3.375rem]">
              <div className="flex flex-col gap-3">
                <>
                  <span className="tracking-[2.362px]">Avg. distance</span>
                  <span className="text-white text-[1.75rem] leading-8">
                    {item.distance as string}
                  </span>
                </>
              </div>
              <div className="flex flex-col gap-3">
                <>
                  <span className="tracking-[2.362px]">Est. travel time</span>
                  <span className="text-white text-[1.75rem] leading-8">
                    {item.travel as string}
                  </span>
                </>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
