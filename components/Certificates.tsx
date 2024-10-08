"use client";

import { projects } from "@/Data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image"; // Import the Next.js Image component

const Certificates = () => {
  return (
    <div className="py-20" id="certificates">
      <h1 className="heading">
        A small selection of <span className="text-purple">Certificates</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 lg:gap-y-8 gap-y-16 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              {/* Image container with overflow hidden */}
              <div className="relative flex items-center justify-center sm:w-[350px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10 lg:rounded-3xl bg-[#13162d]">
                {/* Background image with layout="fill" */}
                <Image
                  src="/bg.png"
                  alt="bg-img"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  className="rounded-3xl" // Adds rounded corners to the background image
                />
                {/* Project image with objectFit="contain" */}
                <Image
                  src={img}
                  alt={title}
                  layout="fill"
                  objectFit="contain"
                  className="z-10"
                />
              </div>

              <h1 className="font-bold lg:text-1xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-normal lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center overflow-hidden"
                    >
                      <Image
                        src={icon}
                        alt={icon}
                        width={32}
                        height={32}
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
