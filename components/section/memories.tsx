import { baloo } from "@/app/font";
import MemoriesCarousel from "../memories-carousel";

const Memories = () => {
  return (
    <div className="space-y-7 lg:space-y-15  px-3 lg:px-0">
      <div className="max-w-[1224px] m-auto ">
        <div className="text-center space-y-3 lg:space-y-6 max-w-[762px] m-auto">
          <h1
            className={`font-bold text-4xl md:text-5xl lg:text-[80px]  ${baloo.className}`}
          >
            Create Fun Memories with
            <span className="bg-linear-to-r from-[#E58C21] via-[#96560C]  to-[#B7410E] bg-clip-text text-transparent">
              {" "}
              Chewtopia
            </span>
          </h1>
          <p className="max-w-[674px] m-auto text-xl md:text-2xl lg:text-[32px] text-[#2B2B2B]">
            From game nights to road trips, Chewtopia brings everyone together!
            Share laughs, joy, and delicious bites with every moment
          </p>
        </div>
      </div>
      <div></div>
      <div>
        <MemoriesCarousel />
      </div>
    </div>
  );
};

export default Memories;
