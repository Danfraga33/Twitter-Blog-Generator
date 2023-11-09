import React from "react";
// import { UserButton, useUser, SignedIn } from "@clerk/nextjs";
import { useSignIn } from "@clerk/nextjs";
import { UserButton, useUser } from "@clerk/nextjs";
function UserInformation() {
  const { user } = useUser();
  console.log(user);
  return <>asdsad</>;
}

export default UserInformation;
