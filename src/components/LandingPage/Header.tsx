import React from "react"; // eslint-disable-line
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import { BeakerIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function Header() {
  const { isSignedIn, user } = useUser();
  console.log(user);
  return (
    <header className="container flex justify-between shadow-md md:shadow-none h-20 ">
      <Image
        className="md:hidden lg:inline-flex pt-2"
        src="./images/logo.svg"
        alt=""
        width="180"
        height="180"
      />
      <Image
        className="hidden md:inline-block lg:hidden"
        src="./images/logo.svg"
        alt=""
        width="45"
        height={32}
      />
      <div className="flex items-center">
        <BeakerIcon className="h-10 md:hidden" />
        <div className="hidden md:flex items-center space-x-3 lg:space-x-8">
          {/* <div className="hidden max-w-xl md:grid gap-4 grid-cols-4 text-right"> */}
          <Link href="../Dashboard/Twitter" className="nav-item">
            Dashboard
          </Link>
          {/* <div className="nav-item">Product</div> */}
          <p className="nav-item">Resouces</p>
          {/* </div> */}
          {!isSignedIn ? (
            <>
              <button className="secondary-button">
                <Link href="/sign-in">Sign in</Link>
              </button>
              <button className="primary-button">
                <Link href="/sign-up">Sign up</Link>
              </button>
            </>
          ) : (
            <UserButton />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
