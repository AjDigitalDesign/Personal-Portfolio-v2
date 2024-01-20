import Image from "next/image";
import projectImg from "../../public/project1.jpeg";
import projectImg2 from "../../public/portfolio2.jpg";
import projectImg3 from "../../public/portfolio3.jpg";
import Link from "next/link";
import { ZoomInIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    id: "01",
    name: "Project One",
    description:
      "My path to self employment, a natural evolution. After 7 years mastering my craft, I was still an employee and I simply had reached a ceiling of how much money I could earn in my career.",
    image: projectImg3,
    url: "/github.com",
    urlLabel: "Github",
  },
  {
    id: "02",
    name: "Project Two",
    description:
      "My path to self employment, a natural evolution. After 7 years mastering my craft, I was still an employee and I simply had reached a ceiling of how much money I could earn in my career.",
    image: projectImg2,
    url: "/github.com",
    urlLabel: "Github",
  },
  {
    id: "03",
    name: "Project Three",
    description:
      "My path to self employment, a natural evolution. After 7 years mastering my craft, I was still an employee and I simply had reached a ceiling of how much money I could earn in my career.",
    image: projectImg,
    url: "/github.com",
    urlLabel: "View Project",
  },
];

const RecentWork = () => {
  const getRandomAspectRatioClass = () => {
    const aspectRatioClasses = ["aspect-video", "aspect-square"];
    const randomIndex = Math.floor(Math.random() * aspectRatioClasses.length);
    return aspectRatioClasses[randomIndex];
  };

  return (
    <section className="py-10 lg:py-14">
      <div className="container max-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center">
          <span className="text-primary_red text-xl font-semibold">
            MY RECENT PORTFOLIO
          </span>
          <h2 className="text-3xl leading-none font-semibold font-sans text-center md:text-5xl">
            My Work
          </h2>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
          {projects?.map((project) => (
            <Dialog key={project.id}>
              <div
                key={project.id}
                className="relative overflow-hidden rounded-[10px] shadow-md group"
              >
                <Image
                  className="w-full h-96 object-cover transform scale-100 transition-transform duration-300 group-hover:scale-110"
                  src={project.image.src}
                  width={600}
                  height={600}
                  alt="test"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-[0.90] transition-opacity duration-300 bg-primary_red  top-[15px] left-[10px] right-[10px] bottom-[10px] h-auto w-auto z-[1] rounded-[10px] transition-all-[0.35s] cursor-pointer">
                  <div className="bg-white top-[30px] text-center z-[99] absolute leading-[55px] right-[20px] h-[40px] w-[40px] rounded-[50%] flex justify-center items-center">
                    <DialogTrigger asChild>
                      <ZoomInIcon size={25} className="text-gray-400" />
                    </DialogTrigger>
                  </div>
                  <div className="text-white absolute bottom-[30px] left-[20px] right-[45px] text-left z-[10] transition-all-[all 300ms ease]">
                    <h2 className="text-xl font-semibold">{project.name}</h2>
                    <span className="font-sans text-sm">Nextjs, Nodejs</span>
                  </div>
                </div>
              </div>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>{project.name}</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you are
                    done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4"></div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};
export default RecentWork;
