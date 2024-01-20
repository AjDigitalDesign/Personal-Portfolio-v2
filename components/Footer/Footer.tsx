import { Codepen, Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const getYear = new Date().getFullYear();
  return (
    <footer className="pt-5 pb-2 lg:pb-3 lg:pt-5">
      <div className="container max-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center w-full py-2 md:flex-row md:justify-between">
          <div className="mb-2">
            <ul className="flex flex-row space-x-3 md:flex-row md:justify-between">
              <li>
                <Link href="#">
                  <Instagram size={20} className="text-primary_red" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Twitter size={20} className="text-primary_red" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Github size={20} className="text-primary_red" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Codepen size={20} className="text-primary_red" />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="text-sm font-sans">
              © {getYear} copyright Ajardiah.dev
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
