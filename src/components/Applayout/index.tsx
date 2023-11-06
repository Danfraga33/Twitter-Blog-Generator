import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React, { useEffect, useState } from "react"; // eslint-disable-line
import { LayoutProps } from "./types/TAppLayoutProps";
import { Feature } from "../Sidebar/Post/_PostDescription";
import { Post } from "../Sidebar/Post/Post";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const AppLayout = ({ children }: LayoutProps) => {
  const [posts, setPosts] = useState([]);

  async function getData() {
    const response = await fetch("/api/DB", {
      method: "GET",
    });
    if (response.ok) {
      const json = await response.json();
      setPosts(json);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "secondary",
  };

  return (
    <div className="grid grid-cols-[300px_1fr] h-screen max-h-screen">
      <div className="flex flex-col text-white overflow-hidden">
        <div className="bg-slate-800 px-2">
          <div className="py-2">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                height={75}
                width={75}
                alt="landing page image"
              />
            </Link>
          </div>
          <Link
            href="/Dashboard/twitter "
            className="bg-green-500 tracking-wider w-full text-center text-white font-bold uppercase px-4 py-2 rounded-md hover:bg-green-600 transition-colors block"
          >
            Twitter
          </Link>
          <div className="py-2">
            <Link
              href="/Dashboard/twitter "
              className="bg-green-500 tracking-wider w-full text-center text-white font-bold uppercase px-4 py-2 rounded-md hover:bg-green-600 transition-colors block"
            >
              Blog
            </Link>
          </div>
          <Link
            href="/Dashboard/token-topup"
            className="block mt-2 text-center"
          >
            <FontAwesomeIcon icon={faCoins} className="text-yellow-500" />0
            <span className="pl-1">Tokens Available.</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto bg-gradient-to-b from-slate-800 to-cyan-800">
          <div className="flex flex-col justify-center ">
            <h1>Posts</h1>
            <List sx={style} component="nav" aria-label="mailbox folders">
              <ListItem alignItems="center">
                <Post />
                {/* <ListItemText primary="Drafts" /> */}
              </ListItem>
              <Divider />
              <ListItem alignItems="center" divider>
                <ListItemText primary="Drafts" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Trash" />
              </ListItem>
              <Divider light />
              <ListItem>
                <ListItemText primary="Spam" />
              </ListItem>
            </List>
          </div>
          {/* <Post />

          {Object.values(posts).map((post, index) => {
            return (
              <ul key={index}>
                <li>
                  <span>Topic:</span>
                  {post.topic}
                </li>
                <li>
                  <span>Post:</span>
                  {post.result}
                </li>
              </ul>
            );
          })}*/}
        </div>

        <div className="bg-cyan-800">user information</div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AppLayout;
