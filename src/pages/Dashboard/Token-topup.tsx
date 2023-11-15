import AppLayout from "../../components/Applayout";
import React, { useState, useEffect, ReactElement } from "react"; // eslint-disable-line
import { NextPageWithLayout } from "../_app";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import TollIcon from "@mui/icons-material/Toll";

const TokenTopup: NextPageWithLayout = () => {
  const [tokens, setTokens] = useState(0);

  const handleClick = async () => {
    const response = await fetch("/api/addTokens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    console.log(result);

    window.location.href = result.session.url;
  };

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await fetch("/api/UserData/getUserData", {
          method: "GET",
        });
        if (response.ok) {
          const user = await response.json();
          setTokens(user[0].tokens);
        } else {
          console.log("NOPE");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    getUserData();
  }, []);
  return (
    <div className="flex justify-center items-center h-full bg-[#151515]">
      <Stack>
        <div
          style={{
            fontSize: "12rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          <span className="text-green-500">{tokens}</span>
          {""}
          <span className="text-white" style={{ fontSize: "3rem" }}>
            TOKENS
          </span>
        </div>
        <Button
          onClick={handleClick}
          className="bg-gray-200 flex justify-center"
          style={{
            color: "rgb(76, 175, 80)",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Add 10 Tokens <TollIcon className="ml-1" />
        </Button>
      </Stack>
    </div>
  );
};

TokenTopup.getLayout = function getLayout(page: ReactElement) {
  return (
    <div>
      <AppLayout>{page}</AppLayout>
    </div>
  );
};

export default TokenTopup;
