"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

type NavbarItemProps = {
  label: string;
  url: string;
};
const NavbarItem: FC<NavbarItemProps> = ({ label, url }) => {
  const pathname = usePathname();
  return (
    <>
      <li className="hover:-translate-y-0.5 duration-500 transition-all">
        <Link
          href={url}
          className={`${
            pathname == url
              ? "text-primary_red font-medium"
              : "hover:text-primary_red uppercase font-medium"
          } `}
        >
          {label}
        </Link>
      </li>
    </>
  );
};

export default NavbarItem;
