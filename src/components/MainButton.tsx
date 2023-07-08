export interface Props {
  type?: 'submit' | 'reset' | 'button';
}

const MainButton = ({ type }: Props) => {
  return (
    <div className="relative group inline-block rounded-full">
      <button
        type={type || 'button'}
        className="before:bg-white/[10.36%] hover:before:scale-150 before:rounded-full z-10 before:-z-20 before:absolute before:inset-0 relative font-bellefair text-sm md:text-[2rem] uppercase h-[9.375rem] w-[9.375rem] md:h-[15.125rem] md:w-[15.125rem] lg:h-[17.125rem] lg:w-[17.125rem] before:h-full before:w-full bg-white text-primary rounded-full tracking-[2px] transition-all ease-linear duration-300 before:transition-all before:ease-linear"
      >
        Explore
      </button>
    </div>
  );
};

export default MainButton;
