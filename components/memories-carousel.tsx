"use client";

import Image from "next/image";
import { Marquee } from "./ui/marquee";
import { Card, CardContent } from "./ui/card";

function MainSliderCard({ index }: { index: number }) {
  return (
    <Card className=" w-3xs lg:w-[405px] h-56 lg:h-[495px] p-0 overflow-clip">
      <CardContent className="p-0">
        <video
          width="320"
          height="240"
          preload="auto"
          autoPlay
          loop
          playsInline
          muted
          className="w-full h-full object-cover"
        >
          <source src={`/vid${index}.mp4`} type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      </CardContent>
    </Card>
  );
}
const MemoriesCarousel = () => {
  return (
    <div className="relative flex h-auto w-full flex-row items-center justify-center overflow-hidden gap-1.5">
      <Marquee pauseOnHover repeat={3} className="[--duration:40s]">
        {[...Array(5)].map((_, index) => (
          <MainSliderCard key={index} index={index + 1} />
        ))}
      </Marquee>
    </div>
  );
};

export default MemoriesCarousel;
