"use client";

import { akaya } from "@/app/font";
import { Marquee } from "./ui/marquee";
import Image from "next/image";

const CarouselItems = ({ flavor }: { flavor: string }) => {
  return (
    <div className="flex items-center gap-6">
      <Image
        src={"/Star.svg"}
        alt=""
        width={400}
        height={400}
        className="h-5 w-5"
      />
      <h1
        className={`text-4xl  ${akaya.className} bg-linear-to-r from-[#E58C21] via-[#96560C]  to-[#B7410E] bg-clip-text text-transparent capitalize`}
      >
        {flavor}
      </h1>
    </div>
  );
};

const FlavorCarousel = () => {
  const flavors = [
    "Berry Bomb",
    "mentor Blast",
    "Spicy Island",
    "Minty Crunch",
    "Strawberry Munch",
  ];
  return (
    <div className="relative flex h-auto w-full flex-row items-center justify-center overflow-hidden gap-1.5 bg-[linear-gradient(to_right,#F7D590,#F8DB95,#FEECA6,#F4C187)] py-8">
      <Marquee pauseOnHover>
        {flavors.map((flavor, index) => (
          <CarouselItems flavor={flavor} key={index} />
        ))}
      </Marquee>
    </div>
  );
};

export default FlavorCarousel;
