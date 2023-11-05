import AppLayout from "../../components/Applayout";
import React, { ReactElement } from "react"; // eslint-disable-line

import { NextPageWithLayout } from "../_app";

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
