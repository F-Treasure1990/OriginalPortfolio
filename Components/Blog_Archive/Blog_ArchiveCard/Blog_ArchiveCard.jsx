import { useTheme } from "styled-components";
import BlogIcon from "../../../icons/BlogIcon";
import {
  Blog_ArchiveCardContainer,
  Blog_ArchiveCardDate,
  Blog_ArchiveCardDescription,
  Blog_ArchiveCardTitle
} from "./Blog_ArchiveCardStyles";
import { useState } from "react";
import UnderConstructionArchive from "../../UnderConstruction/UnderConstructionArchive";
import { AnimatePresence } from "framer-motion";

const Blog_ArchiveCard = ({ blog }) => {
  const { palette } = useTheme();
  const [displayCon, setDisplayCon] = useState(false);
  const underConstruction = () => {
    setDisplayCon(!displayCon);
    setTimeout(() => {
      setDisplayCon(false);
    }, 1500);
  };
  return (
    <>
      <Blog_ArchiveCardContainer h="100%" onClick={underConstruction}>
        <AnimatePresence>{displayCon && <UnderConstructionArchive size="120px" />}</AnimatePresence>
        <BlogIcon d={24} c={palette?.accent} />
        <Blog_ArchiveCardTitle color="textFocused">{blog.title}</Blog_ArchiveCardTitle>
        <Blog_ArchiveCardDate color="accent">{blog.postData}</Blog_ArchiveCardDate>
        <Blog_ArchiveCardDescription color="text">{blog.description}</Blog_ArchiveCardDescription>
      </Blog_ArchiveCardContainer>
    </>
  );
};

export default Blog_ArchiveCard;
