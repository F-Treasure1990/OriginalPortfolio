import { useTheme } from "styled-components";
import BlogIcon from "../../../icons/BlogIcon";
import { Blog_ArchiveCardContainer, Blog_ArchiveCardDate, Blog_ArchiveCardDescription, Blog_ArchiveCardTitle } from "./Blog_ArchiveCardStyles";

const Blog_ArchiveCard = () => {
  const { palette } = useTheme();
  return (
    <>
      <Blog_ArchiveCardContainer h="100%">
        <BlogIcon d={24} c={palette?.accent} />
        <Blog_ArchiveCardTitle color="textFocused">build a spotify clone</Blog_ArchiveCardTitle>
        <Blog_ArchiveCardDate color="accent">10 aug 21</Blog_ArchiveCardDate>
        <Blog_ArchiveCardDescription color="text">
          Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub Having struggled with understanding how the Spotify OAuth flow works, I made the course I
          wish I could have had. Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub
        </Blog_ArchiveCardDescription>
      </Blog_ArchiveCardContainer>
    </>
  );
};

export default Blog_ArchiveCard;
