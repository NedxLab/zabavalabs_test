import Image from "next/image";
import lighting from "@/public/images/light_1.png";
import hero from "@/public/images/hero.jpg";

const HeroSection = () => {
  return (
    <section className=" py-12 border-b border-b-[#ffffff33] relative">
      <div className="w-fit px-20 py-9 flex flex-col">
        <span className=" text-center font-bold text-xl">
          Igniting a Revolution in the Web3 Space
        </span>
      </div>
      <div className=" flex flex-col justify-between items-center pl-12 md:flex-row">
        <div className="relative">
          <Image
            src={lighting}
            className=" absolute right-9 -z-10"
            alt="bulb"
          />

          <h1 className="w-full font-bold text-7xl msm:text-4xl md:w-1/2">
            ZabavaLabs NFT launches <span className="text-[#d434fe]">Soon</span>
          </h1>
          <p className=" my-3 text-lg font-light">
            Join ZabavaLabs waitlist stand a chance to win a Big prize
          </p>
        </div>
        <div className="hero_image">
          <Image className="pr-10 mx-auto" src={hero} alt="NFT Art" />
        </div>
      </div>
      <button className="px-4 py-2 my-8 text-white font-bold">
        View Listings Below!
      </button>
    </section>
  );
};

export default HeroSection;
