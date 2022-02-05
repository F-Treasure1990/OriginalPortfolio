import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useTheme } from "styled-components";
import Arrow from "../../../icons/Arrow";
import { Resources_TableContainer, Resources_TableTitle, Resource_Info } from "../ResourcesStyles";
const container = {
  hidden: { height: 0, opacity: 0, marginTop: 0 },
  show: {
    opacity: 1,
    height: "auto",
    marginTop: 12,
    transition: {
      staggerChildren: 0.1,
      type: "tween",
      delayChildren: 0.15,
      height: { duration: 0.5 }
    }
  },
  exit: {
    height: 0,
    opacity: 0,
    marginTop: 0,
    transition: {
      when: "afterChildren",
      duration: 0.5,
      height: { duration: 0.5 }
    }
  }
};
const item = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0 }
};
const Resource_Option = ({ category }) => {
  const { palette } = useTheme();
  const [toggle, setToggle] = useState(false);
  return (
    <Resources_TableContainer>
      <Resources_TableTitle toggle={toggle} onClick={() => setToggle(!toggle)}>
        <Arrow d={8} c={palette?.accent} />
        {category.title}
      </Resources_TableTitle>
      <AnimatePresence>
        {toggle && (
          <motion.div variants={container} initial="hidden" animate="show" exit="exit">
            {category.resources.map((resource, i) => (
              <a
                href={resource.url}
                className="urlLink"
                target={"_blank"}
                rel="noreferrer"
                key={`${resource.title}-${i}`}
              >
                <Resource_Info variants={item}>
                  <div className="title">{resource.title}</div>
                  <div className="description">{resource.description}</div>
                </Resource_Info>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Resources_TableContainer>
  );
};

export default Resource_Option;
