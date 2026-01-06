import { baloo } from "@/app/font";
import Image from "next/image";
import { Button } from "../ui/button";

const Distributor = () => {
  return (
    <section className="bg-[url(/distributor-bg.jpg)] text-white py-12 lg:py-24 h-auto bg-cover bg-no-repeat text-center relative px-6">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative space-y-14">
        <div className="max-w-2xl px-3 md:px-0 lg:max-w-3xl m-auto space-y-6">
          <h1
            className={`${baloo.className} font-bold text-4xl md:text-5xl lg:text-[80px]`}
          >
            Become a Distributor
          </h1>
          <p className="text-xl md:text-2xl lg:text-[32px]">
            Join the Chewtopia family and bring the joy of snacking to more
            people! Partner with us for exciting opportunities and great
            rewards.
          </p>
        </div>
        <div></div>
        <div className=" text-center h-auto ">
          <Image
            src={"/distributor.png"}
            width={1000}
            height={1000}
            alt=""
            className=" m-auto object-contain mb-12.5 max-h-[307px]"
          />

          <Button className="w-[301px] bg-transparent m-auto hover:bg-transparent hover:scale-110 h-12 bg-[url(/tey.svg)] bg-contain flex items-center justify-center bg-no-repeat">
            Become a Distributor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Distributor;
