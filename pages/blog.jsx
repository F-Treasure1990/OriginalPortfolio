import { motion } from "framer-motion";
import React from "react";
import Blog from "../Components/Blog/Blog";
import Blog_Archive from "../Components/Blog_Archive/Blog_Archive";
import SubNav from "../Components/SubNav/SubNav";

const BlogSection = () => {
  return (
    <>
      <SubNav />
      <Blog />
      <Blog_Archive />
    </>
  );
};

export default BlogSection;
