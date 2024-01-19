import { Github, Instagram, Twitter, X } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "../ui/button";

type BannerType = {
  image: {
    src: string | StaticImageData;
  };
};
const Banner: FC<BannerType> = ({ image }) => {
  return (
    <section className="py-5">
      <div className="container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row">
        <div className="mb-14 lg:mb-0 lg:w-1/2">
          <h1 className="max-w-xl text-[2.2rem] leading-none font-extrabold font-sans text-center md:text-5xl lg:text-left lg:leading-tight mb-5">
            Hi, I'm AJ Jardiah Jr!{" "}
            <span className="not-italic text-primary_red lg:block">
              Full Stack Software Dev.
            </span>
          </h1>
          <p className="max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md">
            {` I'm a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.`}
          </p>
          <div className="flex justify-center mt-14 lg:justify-start space-x-5">
            <Link
              href="#"
              className="text-white bg-primary_red font-medium rounded text-md px-5 py-4 text-center hover:bg-primary_red/70 hover:drop-shadow-md transition duration-300 ease-in-out"
            >
              Learn More
            </Link>
            <Link
              href="#"
              className="text-white bg-primary_gold font-medium rounded text-md px-5 py-4 text-center hover:bg-primary_gold/70 hover:drop-shadow-md transition duration-300 ease-in-out"
            >
              View Portfolio
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src={image.src}
            width={600}
            height={600}
            alt="AJ"
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};
export default Banner;
