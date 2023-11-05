import Link from "next/link";
import React, { FC, ReactElement } from "react";
import { NextPage } from "next";

const Hero: NextPage = () => {
  return (
    <main className="container mt-4 md:flex flex-row-reverse justify-between items-center">
      <div className="md:max-w-[50%]">
        <img src="./images/amico.svg" alt="hero" />
      </div>

      {/* text section */}
      <div className="text-center sm:text-left md:max-w-[40%]">
        <h1 className="font-bold text-4xl leading-[60px]">
          Work at the speed of thought
        </h1>
        <p className="mt-4 text-[18px] leading-[28px] font-normal">
          Revolutionize Your Social Media and Blogging Experience with
          AI-Enhanced Content Generation - Empower Your Creativity, Drive
          Engagement, and Elevate Your Brand!
        </p>
        <div className="mt-8 flex items-center justify-around sm:justify-start sm:space-x-8">
          <Link href="../Dashboard/Home" className="primary-button w-full">
            <span className="flex items-center justify-center">
              Get Started
            </span>
          </Link>
          {/* <p className="font-semibold text-primary whitespace-nowrap flex items-center underline hover:scale-110 active:scale-95 duration-200 cursor-pointer">
						<PlayIcon className="h-8" />
						Watch the Video
					</p> */}
        </div>
      </div>
    </main>
  );
};

export default Hero;
