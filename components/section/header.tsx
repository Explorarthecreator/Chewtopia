import { baloo } from "@/app/font";
import Image from "next/image";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <section>
      <div className="h-screen relative overflow-hidden pt-20 lg:pt-[100px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10  h-full flex items-center justify-center text-white max-w-[1290px] m-auto  ">
          <div className="lg:grid-cols-2 grid-cols-1 grid gap-12.5 px-8 lg:px-0">
            <div className="space-y-12.5">
              <div className="space-y-5 text-center lg:text-left">
                <h1
                  className={`font-bold text-5xl lg:text-[80px] leading-[120%] ${baloo.className}`}
                >
                  Satisfy Your Chewy Cravings
                </h1>
                <p className="text-lg lg:text-[32px] leading-[120%]">
                  Soft, chewy, and bursting with flavor! Dive into a world of
                  deliciously fun snacks made to keep you munching. Ready to
                  taste the magic?
                </p>
              </div>
              <Button className="w-[301px] m-auto lg:m-0 bg-transparent hover:bg-transparent hover:scale-110 h-12 bg-[url(/tey.svg)] bg-contain flex items-center justify-center bg-no-repeat">
                Become a Distributor
              </Button>
            </div>
            <Image width={1000} height={1000} alt="" src={"/main.svg"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
