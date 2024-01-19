import Image from "next/image";
import LogoImg from "../../../public/Logo.png";
import Logo from "./Logo";
import NavbarItem from "./NavbarItem";
import { ModeToggle } from "./ModeToggle";
import MobileToggle from "./MobileToggle";
import { Menu } from "lucide-react";

const navbarMenuItems = [
  {
    id: "01",
    label: "Work",
    url: "/work",
  },
  {
    id: "02",
    label: "About",
    url: "/about",
  },
  {
    id: "03",
    label: "Writing",
    url: "/writing",
  },
  {
    id: "04",
    label: "Contact",
    url: "/contact",
  },
];
const Navbar = () => {
  return (
    <nav className="py-3  border-gray-100 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="container md:px-12">
        <div className="flex items-center justify-between flex-row w-full">
          <div className="pt-[0.2em]">
            <Logo navLogo={LogoImg} />
          </div>
          {/** Right */}
          <div className="lg:flex lg:flex-row lg:justify-between lg:space-x-14 lg:items-center">
            {/** Start Nav Menu */}
            <div className="hidden lg:block">
              <ul className="flex flex-row justify-center items-center lg:space-x-10">
                {navbarMenuItems?.map((item) => (
                  <NavbarItem
                    key={item.id}
                    label={item.label}
                    url={item.label}
                  />
                ))}
              </ul>
            </div>
            {/** End Nav Menu */}

            {/** Start Dark mode/Mobile Toggle*/}
            <div className="flex flex-row items-center space-x-3">
              {/** Start Dark Mode*/}
              <div>
                <ModeToggle />
              </div>
              {/** End Dark Mode*/}
              {/** Start Mobiel Toggle*/}
              <div className="lg:hidden">
                <MobileToggle />
              </div>
            </div>
            {/** End Dark mode/Mobile Toggle*/}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
