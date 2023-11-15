import React from "react"; // eslint-disable-line
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import { BeakerIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function Header() {
  const { isSignedIn, user } = useUser();

  const userDataToSaved = {
    userid: user?.id,
    firstName: user?.firstName,
    lastName: user?.lastName,
    fullName: user?.fullName,
    emailaddress: user?.primaryEmailAddress?.emailAddress,
  };

  console.log(userDataToSaved.emailaddress);

  if (isSignedIn) {
    const storeUserData = async () => {
      try {
        const response = await fetch("/api/UserData/userData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDataToSaved),
        });

        const result = await response.json();

        if (response.ok) {
          console.log("User data stored successfully");
        } else {
          console.error("Error storing user data:", result.error);
        }
      } catch (error) {
        console.error("Error storing user data:", error);
      }
    };
    storeUserData();
  }

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
          <Link href="../Dashboard/Twitter" className="text-xl nav-item">
            Dashboard
          </Link>
          {/* <div className="nav-item">Product</div> */}
          <p className="nav-item text-xl">Resouces</p>
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
            <UserButton afterSignOutUrl="/" />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
