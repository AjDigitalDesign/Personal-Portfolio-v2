import Image from "next/image";
import icon from "../../public/service-icon.svg";
import { Code } from "lucide-react";

const Servcies = () => {
  return (
    <section className="py-10 lg:py-14">
      <div className="container max-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center">
          <span className="text-primary_red text-xl font-semibold">
            What I Do
          </span>
          <h2 className="text-3xl leading-none font-semibold font-sans text-center md:text-5xl">
            My Top Skills
          </h2>
        </div>

        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="rounded px-6 py-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-gray-800 border-[0.01em]">
            <div className="flex items-center justify-center bg-primary_red mb-4 w-[60px] h-[60px] rounded">
              <Code size={40} />
            </div>
            <h5 className="font-semibold text-left text-lg font-sans leading-none mb-3">
              Frontend Development
            </h5>
            <p>
              Calculating salaries and other benefits is an important aspect of
              managing employee compensation..
            </p>
          </div>
          <div className="rounded px-6 py-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-gray-800 border-[0.01em]">
            <div className="flex items-center justify-center bg-primary_red mb-4 w-[60px] h-[60px] rounded">
              <Code size={40} />
            </div>
            <h5 className="font-semibold text-left text-lg font-sans leading-none mb-3">
              Frontend Development
            </h5>
            <p>
              Calculating salaries and other benefits is an important aspect of
              managing employee compensation..
            </p>
          </div>
          <div className="rounded px-6 py-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-gray-800 border-[0.01em]">
            <div className="flex items-center justify-center bg-primary_red mb-4 w-[60px] h-[60px] rounded">
              <Code size={40} />
            </div>
            <h5 className="font-semibold text-left text-lg font-sans leading-none mb-3">
              Frontend Development
            </h5>
            <p>
              Calculating salaries and other benefits is an important aspect of
              managing employee compensation..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Servcies;
