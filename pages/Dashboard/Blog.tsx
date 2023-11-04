import AppLayout from "../../components/Applayout";
import React, { FC, ReactElement } from "react";
import { ReactNode } from "react";
import { NextPage } from "next";
import { NextPageWithLayout } from "../_app";
import { Page } from "../Types/LayoutTypes";

const Blog: NextPageWithLayout = () => {
  return (
    <div>
      <div>this is the blog page</div>
    </div>
  );
};

Blog.getLayout = function getLayout(page: ReactElement) {
  return (
    <div>
      <AppLayout>{page}</AppLayout>
    </div>
  );
};

export default Blog;
