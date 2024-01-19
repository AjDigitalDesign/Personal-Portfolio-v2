"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="py-10 lg:py-14">
      <div className="container max-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center">
          <span className="text-primary_red text-xl font-semibold">
            REviews are in
          </span>
          <h2 className="text-3xl leading-none font-semibold font-sans text-center md:text-5xl">
            Testimonials
          </h2>
        </div>

        <Swiper
          spaceBetween={10}
          //   centeredSlides={true}
          pagination={{
            clickable: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          //   modules={[Pagination]}
          className="mySwiper mt-10"
        >
          <SwiperSlide className="border-2 border-[#333f4d] py-5 px-4">
            <div className="mb-4">
              <h6 className="font-semibold capitalize text-primary_red font-sans text-2xl tracking-wide">
                John Brown
              </h6>
              <span className="font-semibold text-sm">Owner & CEO</span>
            </div>
            <div>
              <p className="line-clamp-4 text-gray-500 ">
                Financial planners help people to knowledge in about how to
                invest and in save their moneye the most efficient way eve plan
                ners help people tioniio know ledige in about how.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-[#333f4d] py-5 px-4">
            <div className="mb-4">
              <h6 className="font-semibold capitalize text-primary_red font-sans text-2xl tracking-wide">
                John Brown
              </h6>
              <span className="font-semibold text-sm">Owner & CEO</span>
            </div>
            <div>
              <p className="line-clamp-4 text-gray-500 ">
                Financial planners help people to knowledge in about how to
                invest and in save their moneye the most efficient way eve plan
                ners help people tioniio know ledige in about how.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-[#333f4d] py-5 px-4">
            <div className="mb-4">
              <h6 className="font-semibold capitalize text-primary_red font-sans text-2xl tracking-wide">
                John Brown
              </h6>
              <span className="font-thin text-sm text-gray-500">
                Owner & CEO
              </span>
            </div>
            <div>
              <p className="line-clamp-4 text-gray-500 ">
                Financial planners help people to knowledge in about how to
                invest and in save their moneye the most efficient way eve plan
                ners help people tioniio know ledige in about how.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-[#333f4d] py-5 px-4">
            <div className="mb-4">
              <h6 className="font-semibold capitalize text-primary_red font-sans text-2xl tracking-wide">
                John Brown
              </h6>
              <span className="font-semibold text-sm">Owner & CEO</span>
            </div>
            <div>
              <p className="line-clamp-4 text-gray-500 ">
                Financial planners help people to knowledge in about how to
                invest and in save their moneye the most efficient way eve plan
                ners help people tioniio know ledige in about how.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
