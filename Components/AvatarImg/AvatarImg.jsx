import { motion } from "framer-motion";

import styled from "styled-components";

export const AvatarImgStyles = styled(motion.img)`
  height: 100%;
  width: 100%;
  border-radius: 100%;
`;

const AvatarImg = () => {
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

  return (
    <AvatarImgStyles
      src={`/DisplayPics/avatar_${DPs[Math.floor(Math.random() * DPs.length)]}.png`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      loading="eager"
    />
  );
};

export default AvatarImg;
