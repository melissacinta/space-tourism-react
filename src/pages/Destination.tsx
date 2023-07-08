import Layout from '../components/Layout';
import Tabs from '../components/Tabs';
import data from '../utils/data.json';
const Destination = () => {
  return (
    <Layout
      title="Destination"
      styles="bg-destination-sm md:bg-destination-md lg:bg-destination-lg"
    >
      <div className="px-6 lg:pl-40 lg:pr-28 x-large:pl-[10.40625rem] x-large:pr-[10.1875rem] pt-[5.5rem] md:pt-[8.5rem] lg:pt-[13.25rem] x-large:pt-[23.55vh] min-h-[80vh] pb-12">
        <p className="font-barlow-condensed text-base tracking-[2.7px] md:text-xl md:leading-6 md:tracking-[3.38px] lg:text-[1.75rem] lg:tracking-[4.72px] uppercase">
          <span className="text-white/25 font-bold">01</span>
          <span className="text-white font-normal ml-2">
            Pick your destination
          </span>
        </p>
        <div className="pt-8 md:pt-16 gap-4 flex justify-between items-center lg:items-start text-center lg:text-left flex-col lg:flex-row">
          <div className="block lg:h-[27.8125rem] lg:pl-10 flex-shrink-0">
            <img
              src="/assets/destination/image-mars.webp"
              className="object-cover h-[10.625rem] w-[10.625rem] md:h-[18.75rem] md:w-[18.75rem] lg:h-[27.8125rem] lg:w-[27.8125rem]"
            />
          </div>
          <div className="text-white max-w-[27.8125rem]">
            <Tabs data={data.destinations} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Destination;
