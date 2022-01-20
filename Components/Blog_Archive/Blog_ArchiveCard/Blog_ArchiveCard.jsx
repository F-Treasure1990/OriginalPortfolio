import { useTheme } from "styled-components";
import BlogIcon from "../../../icons/BlogIcon";
import { Blog_ArchiveCardContainer, Blog_ArchiveCardDate, Blog_ArchiveCardDescription, Blog_ArchiveCardTitle } from "./Blog_ArchiveCardStyles";

const Blog_ArchiveCard = ({ blog }) => {
  const { palette } = useTheme();
  return (
    <>
      <Blog_ArchiveCardContainer h="100%">
        <BlogIcon d={24} c={palette?.accent} />
        <Blog_ArchiveCardTitle color="textFocused">{blog.title}</Blog_ArchiveCardTitle>
        <Blog_ArchiveCardDate color="accent">{blog.postData}</Blog_ArchiveCardDate>
        <Blog_ArchiveCardDescription color="text">{blog.description}</Blog_ArchiveCardDescription>
      </Blog_ArchiveCardContainer>
    </>
  );
};

export default Blog_ArchiveCard;
