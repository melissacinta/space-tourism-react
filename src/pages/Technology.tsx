import Layout from '../components/Layout';
import Slider2Indicator from '../components/Slider2Indicator';

import data from '../utils/data.json';

const Technology = () => {
  return (
    <Layout
      title="Technology"
      styles="bg-technology-sm md:bg-technology-md lg:bg-technology-lg"
    >
      <div className="px-6 lg:pr-0 lg:pl-40 x-large:pl-[10.40625rem] pt-[5.5rem] md:pt-[8.5rem] lg:pt-[13.25rem] x-large:pt-[23.55vh] min-h-screen lg:pb-0 flex flex-col h-full">
        <p className="font-barlow-condensed text-base tracking-[2.7px] md:text-xl md:leading-6 md:tracking-[3.38px] lg:text-[1.75rem] lg:tracking-[4.72px] uppercase text-center md:text-left">
          <span className="text-white/25 font-bold">03</span>
          <span className="text-white font-normal">SPACE LAUNCH 101</span>
        </p>

        <div className="grid grid-cols-1 md:mt-[3.75rem] lg:grid-cols-12 justify-items-center lg:justify-items-start lg:items-center flex-1 lg:mt-auto gap-y-8 mt-8">
          <div className="flex flex-col lg:flex-row items-center text-center lg:text-left lg:items-start lg:min-h-[60vh] x-large:min-h-[25.375rem] gap-8 md:gap-10 lg:pt-16 lg:col-span-7">
            <div className="lg:mt-auto lg:mb-8">
              <Slider2Indicator />
            </div>
            <div className="slider-for">
              {data.technology.map((item) => (
                <div>
                  <span className="font-bellefair text-base leading-[1.125rem] md:text-2xl lg:text-base mb-2 x-large:mb-[0.9375rem] text-white/[50.42%] uppercase lg:tracking-[2.5px]">
                    THE TERMINOLOGY…
                  </span>
                  <h2 className="font-bellefair uppercase text-2xl md:text-[2.5rem] md:leading-[2.875rem] x-large:text-[3.5rem] mb-4 x-large:mb-[1.6875rem] lg:leading-[4rem] text-white">
                    {item.name}
                  </h2>

                  <p className="text-[0.938rem] leading-[1.125rem] text-secondary w-full md:max-w-[37rem] lg:max-w-[27.75rem] text-base md:leading-[1.1875rem] lg:text-lg lg:leading-8">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="slider-for bg-red-500 mb-8 lg:mb-0 w-full flex justify-end order-first lg:order-last h-full max-h-[13.875rem] md:max-h-[33.25rem] lg:max-h-[55vh] x-large:max-h-[32.9375rem] overflow-hidden col-span-5">
            {data.technology.map((item) => (
              <div>
                {' '}
                <img src={item.images.portrait} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Technology;
