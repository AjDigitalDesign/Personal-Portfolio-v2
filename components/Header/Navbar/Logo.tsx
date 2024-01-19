import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

type LogoType = {
  navLogo: {
    src: string | StaticImageData;
  };
};

const Logo: FC<LogoType> = ({ navLogo }) => {
  return (
    <>
      <Image
        src={navLogo.src}
        width={55}
        height={60}
        alt="AJ Jardiah Jr"
        className="m-h-10 bg-cover object-contain"
      />
    </>
  );
};

export default Logo;
