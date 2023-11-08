import React, { FC } from "react"; // eslint-disable-line
import { SignUp } from "@clerk/nextjs";

const SignUpPage: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
