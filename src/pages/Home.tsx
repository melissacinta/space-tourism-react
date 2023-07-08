import Layout from '../components/Layout';
import MainButton from '../components/MainButton';

const Home = () => {
  return (
    <Layout title="Home" styles="bg-home-sm md:bg-home-md lg:bg-home-lg">
      <div className="main-section px-6 lg:px-[10.3125rem] pb-[20%] md:pb-[15%] mt-auto lg:pb-[5%] flex min-h-[80vh] lg:max-h-screen lg:overflow-hidden items-center lg:items-end text-center lg:text-left justify-between flex-col lg:flex-row">
        <div className="max-w-[28.125rem] flex flex-col gap-4 md:gap-6 pr-[5px]">
          <p className="font-barlow-condensed text-base tracking-[2.7px] md:text-xl md:leading-6 md:tracking-[3.38px] lg:text-[1.75rem] lg:tracking-[4.72px] text-secondary uppercase font-normal">
            So, you want to travel to
          </p>
          <p className="text-[5rem] leading-[6.25rem] md:text-[9.375rem] md:leading-none lg:leading-[10.75rem] text-white uppercase font-bellefair">
            Space
          </p>
          <p className="text-secondary text-[0.9375rem] leading-[1.5625rem] md:text-base md:leading-7 lg:text-lg lg:leading-8 max-w-[20.4375rem] md:max-w-[27.75rem] font-normal">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <MainButton />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
