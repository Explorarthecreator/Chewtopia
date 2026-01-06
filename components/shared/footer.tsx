import { baloo } from "@/app/font";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white px-6 lg:px-10 xl:px-0 py-12 max-w-[1224px] m-auto lg:flex lg:justify-between">
      <div className="lg:w-1/2">
        <Image
          src={"/footer-logo.svg"}
          alt="chewtopia logo"
          width={1000}
          height={1000}
          className="  m-auto lg:m-0"
        />
      </div>
      <div className="space-y-18 lg:flex lg:flex-col lg:justify-between lg:w-2/5">
        <div className="space-y-6 lg:flex lg:gap-6">
          <div className="space-y-4 lg:w-[184px]">
            <h1 className={`${baloo.className} font-bold text-[28px]`}>Info</h1>
            <div className="space-y-4 text-[#2B2B2B] text-lg">
              <p>Flavors</p>
              <p>Support</p>
            </div>
          </div>
          <div className="space-y-4 lg:w-[288px]">
            <h1 className={`${baloo.className} font-bold text-[28px]`}>
              Contacts
            </h1>
            <p className="space-y-4 text-[#2B2B2B] text-lg">
              hello@logoipsum.com <br /> 1901 Thornridge Cir. Shiloh,
              <br /> Lagos, Nigeria
            </p>
          </div>
        </div>
        <div className="space-y-6 lg:flex lg:flex-row-reverse lg:justify-between">
          <div className="flex items-center gap-7.5 flex-wrap">
            <Image
              src={"/Facebook.svg"}
              alt="facebook logo"
              width={100}
              height={100}
              className="h-8 w-8"
            />

            <Image
              src={"/Instagram.svg"}
              alt="instagram logo"
              width={100}
              height={100}
              className="h-8 w-8"
            />

            <Image
              src={"/Vkontakte.svg"}
              alt="vkontakte logo"
              width={100}
              height={100}
              className="h-8 w-8"
            />

            <Image
              src={"/Telegram.svg"}
              alt="telegram logo"
              width={100}
              height={100}
              className="h-8 w-8"
            />
          </div>
          <p className="text-[#121212] font-semibold opacity-50">
            © 2025 — Copyright
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
