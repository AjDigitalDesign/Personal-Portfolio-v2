import { ModeToggle } from "@/components/Header/Navbar/ModeToggle";
import Banner from "@/components/Home/Banner";
import BannerImg from "../public/hero_bg.png";
import AjPhoto from "../public/aj.jpeg";
import Image from "next/image";

import About from "@/components/Home/About";
import Servcies from "@/components/Home/Services";
import RecentWork from "@/components/Home/RecentWork";
import Testimonials from "@/components/Home/Testimonials";
import RecentPosts from "@/components/Home/RecentPosts";

import blog1 from "../public/blog1.jpeg";
import blog12 from "../public/blog2.jpeg";

const blogposts = [
  {
    id: "01",
    name: "The standard personal My portfolio",
    date: "Jan 10, 2024",
    url: "the-standard-personal-My-portfolio",
    image: blog1,
  },
  {
    id: "02",
    name: "The standard personal My portfolio-two",
    date: "Jan 19, 2024",
    url: "the-standard-personal-My-portfolio-two",
    image: blog12,
  },

  {
    id: "03",
    name: "The standard personal My portfolio-three",
    date: "Jan 20, 2024",
    url: "the-standard-personal-My-portfolio-three",
    image: blog12,
  },
];

export default function Home() {
  return (
    <div className="relative">
      <Banner image={BannerImg} />
      <Servcies />
      <RecentWork />
      <Testimonials />
      <RecentPosts posts={blogposts} />
    </div>
  );
}
