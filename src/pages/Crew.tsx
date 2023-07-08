import Layout from '../components/Layout';
import SliderIndicator from '../components/SliderIndicator';

const Crew = () => {
  return (
    <Layout title="Crew" styles="bg-crew-sm md:bg-crew-md lg:bg-crew-lg">
      <div className="px-6 lg:pl-40 lg:pr-28 x-large:pl-[10.40625rem] x-large:pr-[10.1875rem] pt-[5.5rem] md:pt-[8.5rem] lg:pt-[13.25rem] x-large:pt-[23.55vh] min-h-screen lg:pb-0 flex flex-col h-full">
        <p className="font-barlow-condensed text-base tracking-[2.7px] md:text-xl md:leading-6 md:tracking-[3.38px] lg:text-[1.75rem] lg:tracking-[4.72px] uppercase text-center md:text-left">
          <span className="text-white/25 font-bold">02</span>
          <span className="text-white font-normal">Meet your crew</span>
        </p>

        <div className="grid grid-cols-1 md:mt-[3.75rem] lg:grid-cols-2 justify-items-center lg:justify-items-start lg:items-center flex-1 lg:mt-auto">
          <div className="flex flex-col items-center text-center lg:text-left lg:items-start lg:min-h-[60vh] x-large:min-h-[25.375rem] gap-8 md:gap-10 lg:pt-16">
            <div>
              <span className="font-bellefair text-base leading-[1.125rem] md:text-2xl lg:text-[2rem] mb-2 x-large:mb-[0.9375rem] text-white/[50.42%] lg:leading-[2.313rem] uppercase">
                Commander
              </span>
              <h2 className="font-bellefair uppercase text-2xl md:text-[2.5rem] md:leading-[2.875rem] x-large:text-[3.5rem] mb-4 x-large:mb-[1.6875rem] lg:leading-[4rem] text-white">
                Douglas Hurley
              </h2>

              <p className="text-[0.938rem] leading-[1.125rem] text-secondary w-full md:max-w-[37rem] lg:max-w-[27.75rem] text-base md:leading-[1.1875rem] lg:text-lg lg:leading-8">
                Mark Richard Shuttleworth is the founder and CEO of Canonical,
                the company behind the Linux-based Ubuntu operating system.
                Shuttleworth became the first South African to travel to space
                as a space tourist.
              </p>
            </div>
            <div className="order-first md:order-last lg:mt-auto lg:mb-8">
              <SliderIndicator />
            </div>
          </div>
          <div className="border-b md:border-0 mb-8 md:mb-0 w-full flex justify-center border-[#383B4B] order-first md:order-last h-full max-h-[13.875rem] md:max-h-[33.25rem] lg:max-h-[63vh] x-large:max-h-[70vh] overflow-hidden self-end">
            <img
              src="/assets/crew/image-douglas-hurley.png"
              alt=""
              className="object-cover h-full"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Crew;
