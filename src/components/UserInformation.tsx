import React from "react"; // eslint-disable-line
import { useUser, UserButton } from "@clerk/nextjs";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TwitterIcon from "@mui/icons-material/Twitter";

function UserInformation() {
  const theme = useTheme(); // eslint-disable-line
  const { user } = useUser();
  // console.log(user);

  return (
    <div className="p-1">
      <Paper className="px-3.5 py-1.5 bg-gradient-to-r from-white to-indigo-300 ">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-cols">
            <UserButton afterSignOutUrl="/" afterSignInUrl="/" />
            <div className="flex flex-col ml-2 text-sm">
              {user?.fullName}
              <div className="text-gray-500">
                {user?.emailAddresses[0].emailAddress}
              </div>
            </div>
          </div>
          <div>
            <a href="https://twitter.com/home">
              <TwitterIcon className="text-blue-500" />
            </a>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default UserInformation;
