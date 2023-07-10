import { useState, useRef } from 'react';
import Layout from '../components/Layout';
import data from '../utils/data.json';
import Slider from 'react-slick';
import { classNames } from '../utils/functions';

const Crew = () => {
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
    beforeChange: (_current, next) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      secondSlider.current.slickGoTo(next);
      setActive(next as number);
    },
  };

  const navSliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: mainSlider.current as React.MutableRefObject<HTMLDivElement>,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <Layout title="Crew" styles="bg-crew-sm md:bg-crew-md lg:bg-crew-lg">
      <div className="px-6 lg:pl-40 lg:pr-28 x-large:pl-[10.40625rem] x-large:pr-[10.1875rem] pt-[5.5rem] md:pt-[8.5rem] lg:pt-[13.25rem] x-large:pt-[23.55vh] min-h-screen lg:pb-0 flex flex-col h-full">
        <p className="font-barlow-condensed text-base tracking-[2.7px] md:text-xl md:leading-6 md:tracking-[3.38px] lg:text-[1.75rem] lg:tracking-[4.72px] uppercase text-center md:text-left">
          <span className="text-white/25 font-bold">02</span>
          <span className="text-white font-normal ml-2">Meet your crew</span>
        </p>

        <div className="grid grid-cols-1 md:mt-[3.75rem] lg:grid-cols-2 justify-items-center lg:justify-items-start lg:items-center flex-1 lg:mt-auto w-full h-full">
          <div className="flex flex-col items-center text-center lg:text-left lg:items-start lg:min-h-[60vh] x-large:min-h-[25.375rem] gap-8 md:gap-10 lg:pt-16 w-full h-full">
            <div className="w-full lg:mt-auto">
              <Slider {...mainSliderSettings} ref={mainSlider}>
                {data.crew.map((item) => (
                  <div key={item.name} className="">
                    <div className="block">
                      <span className="font-bellefair text-base leading-[1.125rem] md:text-2xl lg:text-[2rem] mb-2 x-large:mb-[0.9375rem] text-white/[50.42%] lg:leading-[2.313rem] uppercase">
                        {item.role}
                      </span>
                      <h2 className="font-bellefair uppercase text-2xl md:text-[2.5rem] md:leading-[2.875rem] x-large:text-[3.5rem] mb-4 x-large:mb-[1.6875rem] lg:leading-[4rem] text-white">
                        {item.name}
                      </h2>

                      <p className="mx-auto lg:mx-0 text-[0.938rem] leading-[1.125rem] text-secondary w-full md:max-w-[37rem] lg:max-w-[27.75rem] text-base md:leading-[1.1875rem] lg:text-lg lg:leading-8 min-h-max">
                        <span>{item.bio}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="slider-nav order-first md:order-last lg:mt-auto lg:mb-8 x-large:mb-32 w-[5.5rem] lg:[8.25rem">
              <Slider {...navSliderSettings} ref={navSlider}>
                {['0', '1', '2', '3'].map((item) => (
                  <div className="h-full" key={item}>
                    <span
                      className={classNames(
                        (active as unknown as string) == item
                          ? 'bg-white'
                          : 'bg-white/[17.44%]',
                        'uppercase block text-base h-2.5 w-2.5 rounded-full  hover:bg-white/[50.01%] transition-all duration-300'
                      )}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="order-first md:order-last h-full w-full self-end flex items-end">
            <Slider {...mainSliderSettings} vertical ref={secondSlider}>
              {data.crew.map((item) => (
                <div key={item.name}>
                  <div>
                    <div className=" flex justify-center border-[#383B4B] border-b md:border-0 mb-8 md:mb-0 ">
                      <div className="inline-block lg:block h-full max-h-[13.875rem] md:max-h-[33.25rem] lg:max-h-[63vh] x-large:max-h-[70vh] overflow-hidden">
                        <img
                          src={item.images.png}
                          alt=""
                          className="h-full max-h-[13.875rem] md:max-h-[33.25rem] lg:max-h-[63vh] x-large:max-h-[70vh] object-cover w-autolg:mx-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <style>{`
.slider-nav .slick-track{
            width:88px
          }
        @media all and (min-width:1024px){
          .slider-nav .slick-track{
            width:132px
          }
        }
        `}</style>
    </Layout>
  );
};

export default Crew;
