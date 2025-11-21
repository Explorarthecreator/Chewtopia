import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <Image
          src={"logo.svg"}
          alt=""
          width={1000}
          height={1000}
          className="animate-bounce w-52 h-52 lg:w-80 lg:h-80 m-auto"
        />
        <p className="animate-pulse text-center text-2xl lg:text-5xl">
          Chewy treat coming soon
        </p>
      </div>
    </div>
  );
}
