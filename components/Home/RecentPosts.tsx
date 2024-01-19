import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface RecentPostsProps {
  posts: {
    name: string;
    id: string;
    url: string;
    date: string;
    image: {
      src: string | StaticImageData;
    };
  }[];
}

const RecentPosts: FC<RecentPostsProps> = ({ posts }) => {
  return (
    <section className="py-10 lg:py-14">
      <div className="container max-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col max-w-[30rem] mx-auto justify-center items-center">
          <span className="text-primary_red text-xl font-semibold">
            Latest Articles
          </span>
          <h2 className="text-3xl leading-none font-semibold font-sans text-center md:text-5xl">
            Recent Industry trends and updates
          </h2>
        </div>

        <div className="mt-10  items-center grid grid-cols-1 sm:grid-cols-2 sm:space-x-3  md:space-x-5 md:grid-cols-2 md:items-center lg:grid-cols-3 lg:space-x-3">
          {posts?.map((post) => (
            <div
              key={post.id}
              className="relative overflow-hidden bg-cover mb-10"
            >
              <div className="relative bg-no-repeat overflow-hidden">
                <Link
                  href={`/writing/${post.url}`}
                  className="block h-[300px] overflow-hidden w-full"
                >
                  <Image
                    src={post.image.src}
                    width={400}
                    height={400}
                    alt="test"
                    className=" w-full transition duration-500 ease-in-out hover:scale-110 object-cover bg-cover"
                  />
                </Link>
              </div>
              <div className="relative w-[90%] bg-[#09101a] m-auto -top-[45px] px-4 py-5 text-center">
                <div className="relative">
                  <span className="absolute inline-block font-serif text-sm py-2 bg-primary_red  w-[200px] m-auto -top-[30px] left-0 right-0">
                    {post.date}
                  </span>
                </div>
                <div className="mt-5">
                  <ul className="flex flex-row items-center justify-center space-x-4 text-sm font-light text-gray-500 capitalize">
                    <li>Php</li>
                    <li>Laravel</li>
                    <li>WordPress</li>
                  </ul>
                </div>
                <div className="mt-1">
                  <h3 className="font-bold text-2xl font-sans text-white">
                    <Link href={`/writing/${post.url}`}>{post.name}</Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
