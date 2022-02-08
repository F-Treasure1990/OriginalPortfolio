import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import imageLoader from "../../loader";

export const AvatarImgStyles = styled(motion.div)`
  height: 100%;
  width: 100%;
  border-radius: 100%;
  overflow: hidden;
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
    <AvatarImgStyles>
      <Image
        loader={imageLoader}
        src={`/DisplayPics/avatar_smile.png`}
        width={148}
        height={148}
        priority={true}
        alt="display pic"
      />
    </AvatarImgStyles>
  );
};

export default AvatarImg;
