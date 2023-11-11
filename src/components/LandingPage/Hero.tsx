import Link from "next/link";
import React from "react"; // eslint-disable-line
import { NextPage } from "next";
import Image from "next/image";
// import { useTheme } from "@mui/material/styles";

import { Button } from "@mui/material";

const Hero: NextPage = () => {
  const handleClick = async () => {
    const response = await fetch("/api/webhooks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
  };

  // const theme = useTheme();
  // console.log(theme);
  return (
    <main className="container mt-4 md:flex flex-row-reverse justify-evenly items-center">
      <div className="md:max-w-[50%]">
        <Image src="./images/amico.svg" width={600} height={560} alt="hero" />
      </div>

      {/* text section */}
      <div className="text-center sm:text-left md:max-w-[40%]">
        <h1 className="font-bold text-4xl leading-[60px]">
          Work at the speed of thought
        </h1>

        <p className="mt-4 text-[18px] leading-[28px] font-normal">
          <span className="text-blue-500">Revolutionize Your Social Media</span>{" "}
          and <span className="text-blue-500">Blogging Experience</span> with
          AI-Enhanced Content Generation - Empower Your Creativity, Drive
          Engagement, and{" "}
          <span className="text-blue-500">Elevate Your Brand!</span>
        </p>

        <div className="mt-8 flex items-center justify-around sm:justify-start sm:space-x-8">
          <Link href="../Dashboard/Twitter" className="primary-button w-full">
            <span className="flex items-center justify-center">
              <Button variant="contained" sx={{ color: "#000" }}>
                Get Started
              </Button>
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
