import Image from "next/image";
import projectImg from "../../public/project1.jpeg";
import projectImg2 from "../../public/portfolio2.jpg";
import projectImg3 from "../../public/portfolio3.jpg";
import Link from "next/link";

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
            <div
              key={project.id}
              className="relative mb-5 overflow-hidden bg-cover"
            >
              <Image
                src={project.image}
                width={600}
                height={400}
                alt="test"
                className="object-cover bg-cover h-96 overflow-hidden"
              />
              <div
                className="
               absolute 
               bottom-0 left-0 right-0 w-full
               bg-gradient-to-t from-black/95 via-black/80 to-black/10
               py-4 
               px-3 
               text-center
               text-white
               overflow-hidden
               cursor-pointer
               transform: scale(0);
               opacity-0 transition duration-300 ease-in-out  hover:opacity-100
               "
              >
                <h5 className="font-semibold text-2xl mb-2 font-sans capitalize">
                  {project.name}
                </h5>
                <p className="line-clamp-6 text-center  ">
                  {project.description}
                </p>
                <div>
                  <Link
                    href={project.url}
                    className="text-white inline-block bg-primary_red font-medium rounded text-sm px-5 py-3 text-center hover:bg-primary_red/70 hover:drop-shadow-md transition duration-300 ease-in-out my-2"
                  >
                    {project.urlLabel}
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </section>
  );
};
export default RecentWork;
