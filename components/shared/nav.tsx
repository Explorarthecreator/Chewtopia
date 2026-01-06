import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="max-w-[1338px] m-auto fixed z-50 pt-2 top-0">
      <div className="h-20 lg:h-[100px] w-[185px]">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt="Chewtopia logo"
            width={500}
            height={500}
            className="h-full"
          />
        </Link>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
