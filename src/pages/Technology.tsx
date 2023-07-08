import Layout from '../components/Layout';
import data from '../utils/data.json';
import Slider from 'react-slick';
import { useEffect, useRef, useState } from 'react';
import { classNames } from '../utils/functions';

const Technology = () => {
  const [active, setActive] = useState(0);
  const mainSlider = useRef(null);
  const navSlider = useRef(null);
  const secondSlider = useRef(null);
  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    asNavFor: navSlider.current as React.MutableRefObject<HTMLDivElement>,
    beforeChange: (current, next) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      secondSlider.current.slickGoTo(next);
      setActive(next as number);
    },
  };

  const navSliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: mainSlider.current as React.MutableRefObject<HTMLDivElement>,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <Layout
      title="Technology"
      styles="bg-technology-sm md:bg-technology-md lg:bg-technology-lg"
    >
      <div className="px-6 text-white lg:pr-0 lg:pl-40 x-large:pl-[10.40625rem] pt-[5.5rem] md:pt-[8.5rem] lg:pt-[13.25rem] x-large:pt-[23.55vh] min-h-screen lg:pb-0 flex flex-col h-full">
        <p className="font-barlow-condensed text-base tracking-[2.7px] md:text-xl md:leading-6 md:tracking-[3.38px] lg:text-[1.75rem] lg:tracking-[4.72px] uppercase text-center md:text-left">
          <span className="text-white/25 font-bold">03</span>
          <span className="text-white font-normal ml-2">SPACE LAUNCH 101</span>
        </p>
        <div className="grid grid-cols-1 md:mt-[3.75rem] lg:grid-cols-12 justify-items-center lg:justify-items-start lg:items-center flex-1 lg:mt-auto gap-y-8 mt-8">
          <div className="flex flex-col lg:flex-row items-center text-center lg:text-left lg:items-start lg:min-h-[60vh] x-large:min-h-[25.375rem] gap-8 md:gap-10 lg:pt-16 lg:col-span-7 w-full">
            <div className="lg:mt-auto lg:mb-4">
              <nav>
                <div className="slider-nav">
                  <Slider {...navSliderSettings} ref={navSlider}>
                    {['1', '2', '3'].map((item) => (
                      <div className="h-full" key={item}>
                        <span
                          className={classNames(
                            ((active + 1) as unknown as string) == item
                              ? 'border-white text-primary bg-white hover:text-white'
                              : 'border-white/25 text-white bg-white/[17.44%] hover:border-white',
                            'border uppercase font-bellefair flex justify-center items-center text-base md:text-2xl lg:text-[2rem] h-10 w-10 md:h-[3.75rem] md:w-[3.75rem] lg:h-20 lg:w-20 rounded-full hover:bg-transparent transition-all duration-500 focus:bg-white'
                          )}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </Slider>
                </div>
              </nav>
            </div>
            <div className="w-full">
              <Slider {...mainSliderSettings} ref={mainSlider}>
                {data.technology.map((item) => (
                  <div key={item.name}>
                    <span className="font-bellefair text-base leading-[1.125rem] md:text-2xl lg:text-base mb-2 x-large:mb-[0.9375rem] text-white/[50.42%] uppercase lg:tracking-[2.5px]">
                      THE TERMINOLOGY…
                    </span>
                    <h2 className="font-bellefair uppercase text-2xl md:text-[2.5rem] md:leading-[2.875rem] x-large:text-[3.5rem] mb-4 x-large:mb-[1.6875rem] lg:leading-[4rem] text-white">
                      {item.name}
                    </h2>

                    <p className="mx-auto lg:mx-0 text-[0.938rem] leading-[1.125rem] text-secondary w-full md:max-w-[37rem] lg:max-w-[27.75rem] text-base md:leading-[1.1875rem] lg:text-lg lg:leading-8">
                      {item.description}
                    </p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="order-first lg:order-last col-span-5">
            <Slider {...mainSliderSettings} vertical ref={secondSlider}>
              {' '}
              {data.technology.map((item) => (
                <div key={item.name}>
                  <div
                    className={`mb-8 lg:mb-0 w-full h-max flex justify-end lg:block order-first max-h-[13.875rem] md:max-h-[19.375rem] lg:max-h-[55vh] x-large:max-h-[32.9375rem] overflow-hidden`}
                  >
                    <img
                      src={item.images.portrait}
                      alt="portait"
                      className="object-cover hidden lg:block h-full w-auto"
                    />
                    <img
                      src={item.images.landscape}
                      alt="landsacpe"
                      className="object-cover lg:hidden block h-auto w-full"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          {/*  */}
        </div>

        <style>{`
.slider-nav .slick-track{
            display:flex;
            gap:32px;
          }
        @media all and (min-width:1024px){
          .slider-nav .slick-track{
            display:flex;
            flex-direction:column;
            gap:32px;
          }
        }
        `}</style>
      </div>
    </Layout>
  );
};

export default Technology;
