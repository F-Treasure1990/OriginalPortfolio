import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";

export const AvatarImgStyles = styled(motion.img)`
  height: 100%;
  width: 100%;
  border-radius: 100%;
`;

const AvatarImg = () => {
  // const router = useRouter();

  // const [display, setDisplay] = useState("/DisplayPics/avatar_smile.png");
  const DPs = [
    "fist_bump",
    "laptop",
    "tongue",
    "smile",
    "fingerscrossed",
    "meditating",
    "thumbs_up",
    "peace",
    "wink",
    "pray"
  ];

  // useEffect(() => {
  //   if (router.pathname !== "/")
  //     setDisplay(`/DisplayPics/avatar_${DPs[Math.floor(Math.random() * DPs.length)]}.png`);
  // }, [router.pathname]);
  return (
    <AvatarImgStyles
      src={`/DisplayPics/avatar_${DPs[Math.floor(Math.random() * DPs.length)]}.png`}
    />
  );
};

export default AvatarImg;
