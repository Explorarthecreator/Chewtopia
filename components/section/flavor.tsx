import { baloo } from "@/app/font";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Flavor = () => {
  const triFlavors = [
    {
      title: "Mentor Blast",
      description:
        "A refreshing fusion of tangy citrus and a cool, crisp finish that awakens your taste buds. ⚡💙",
      imageUrl: "/blast.png",
    },
    {
      title: "Strawberry Munch",
      description:
        "Sweet, juicy strawberry goodness packed into every bite for a fruity, fun-filled munch! 🍓💖",
      imageUrl: "/strawberry.png",
    },
    {
      title: "Minty Crunch",
      description:
        "A crisp and cool minty delight with a crunchy kick for a refreshingly unique snacking experience. 🌿💚",
      imageUrl: "/mint.png",
    },
  ];

  const doubleFlavor = [
    {
      title: "Berry Bomb",
      description:
        "A bold explosion of mixed berries, bursting with deep, rich, and slightly tangy flavors. 💜💥",
      imageUrl: "/berry.png",
      bg: "#F5E6F6",
      bgImage: "/berry-bg.jpg",
    },
    {
      title: "Spicy Island",
      description:
        "A fiery blend of exotic spices with a tropical twist, delivering heat and flavor in every crunch! 🔥🏝️🧡",
      imageUrl: "/spicy.png",
      bg: "#FFEBC3",
      bgImage: "/spicy-bg.jpg",
    },
  ];
  return (
    <div className="max-w-[1224px] m-auto space-y-7 lg:space-y-15  px-3 lg:px-0">
      <div className="text-center space-y-3 lg:space-y-6 ">
        <h1
          className={`font-bold text-4xl md:text-5xl lg:text-[80px]  ${baloo.className}`}
        >
          Enjoy the Burst of{" "}
          <span className="bg-linear-to-r from-[#E58C21] via-[#96560C]  to-[#B7410E] bg-clip-text text-transparent">
            {" "}
            Flavors
          </span>
        </h1>
        <p className="max-w-[674px] m-auto text-xl md:text-2xl lg:text-[32px] text-[#2B2B2B]">
          Each bite is an explosion of bold, exciting flavors! From sweet to
          spicy, there&apos;s a taste adventure waiting for you.
        </p>
      </div>
      <div className="space-y-6 px-4 xl:px-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {triFlavors.map((flavor, index) => (
            <div
              key={index}
              className={cn(
                `group relative rounded-xl p-5  bg-center hover:text-white bg-cover bg-no-repeat hover:ease-in-out hover:transition-all hover:duration-300`,
                flavor.title.includes("Mint") &&
                  "bg-[#E4FFC3] hover:bg-[url(/mint-bg.png)]",
                flavor.title.includes("Strawberry") &&
                  "bg-[#FFCFD8] hover:bg-[url(/strawberry-bg.jpg)]",
                flavor.title.includes("Blast") &&
                  "bg-[#C3E2FF] hover:bg-[url(/blast-bg.png)]"
              )}
            >
              <div className="group-hover:block absolute hidden inset-0 bg-black opacity-40"></div>

              <div className=" relative">
                <h1 className={`${baloo.className} text-[32px] font-bold`}>
                  {flavor.title}
                </h1>
                <p className="font-bold text-[#555555] group-hover:text-white">
                  {flavor.description}
                </p>
              </div>

              <Image
                src={flavor.imageUrl}
                width={1000}
                height={1000}
                alt=""
                className="group-hover:hidden"
              />
              <div className="relative h-[300px] hidden group-hover:flex items-center justify-center ">
                <Button className="w-[301px] flex bg-transparent m-auto hover:bg-transparent hover:scale-110 h-12 bg-[url(/tey.svg)] bg-contain  items-center justify-center bg-no-repeat">
                  Become a Distributor
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {doubleFlavor.map((flavor, index) => (
            <div
              key={index}
              className={cn(
                `group rounded-xl p-5  bg-center hover:text-white bg-cover bg-no-repeat hover:ease-in-out first:shrink-0 hover:transition-all hover:duration-300 lg:w-2/5 lg:last:w-3/5`,
                flavor.title.includes("Berry") &&
                  "bg-[#F5E6F6] hover:bg-[url(/berry-bg.jpg)]",
                flavor.title.includes("Spicy") &&
                  "bg-[#FFEBC3] hover:bg-[url(/spicy-bg.jpg)]"
              )}
            >
              <div className="">
                <h1 className={`${baloo.className} text-[32px] font-bold`}>
                  {flavor.title}
                </h1>
                <p className="font-bold text-[#555555] group-hover:text-white">
                  {flavor.description}
                </p>
              </div>

              <div className="h-[300px] group-hover:flex items-center justify-center">
                <Image
                  src={flavor.imageUrl}
                  width={1000}
                  height={1000}
                  alt=""
                  className="group-hover:hidden h-full object-contain"
                />

                <Button className="w-[301px] hidden group-hover:flex  bg-transparent m-auto hover:bg-transparent hover:scale-110 h-12 bg-[url(/tey.svg)] bg-contain  items-center justify-center bg-no-repeat">
                  Become a Distributor
                </Button>
              </div>

              {/* <div className="h-[300px]   ">
                
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flavor;
