import { useEffect } from "react";
import { preLoaderAnim } from "./loader";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader gap-[5px] overflow-hidden text-[14px] sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
      <div className="texts-container gap-4 font-neue w-500 flex h-60 items-center justify-center  overflow-hidden text-[14px]  text-[#e4ded7] opacity-0 sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
        <span>Farhan</span>
        <span>Mansuri</span>
        <div className="sub hidden"></div>
      </div>
    </div>
  );
};

export default PreLoader;
