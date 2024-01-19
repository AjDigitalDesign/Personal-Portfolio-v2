import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

type AboutType = {
  image: {
    src: string | StaticImageData;
  };
};
const About: FC<AboutType> = ({ image }) => {
  return (
    <div className="px-4 py-10 md:px-6 lg:px-12 xl:px-16 grid grid-cols-1">
      <div className=" relative order-2 md:order-1">
        <Image
          src={image.src}
          width={400}
          height={300}
          alt="AJ"
          className="bg-cover object-cover"
        />
      </div>
      <div className="order-1 md:order-2">
        <div className="mb-5 text-center">
          <span className="inline-block mb-1 uppercase text-primary_red font-semibold">
            Little About Me
          </span>
          <h2 className="font-semibold text-2xl">
            Transforming visions into exceptional portfolios
          </h2>
        </div>
        <div className="text-center mb-7">
          <p>
            Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut
            odit auting fugit sed thisnquia consequuntur magni dolores eos
            designer heresm qui ratione
          </p>
          <div>
            <Link href="#">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
