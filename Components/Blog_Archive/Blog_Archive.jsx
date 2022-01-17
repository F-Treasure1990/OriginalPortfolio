import { Archive_SubTitle, Archive_Title } from "../../styles/GlobalStyles";
import Blog_ArchiveCard from "./Blog_ArchiveCard/Blog_ArchiveCard";
import { Blog_ArchiveCardContainer } from "./Blog_ArchiveCard/Blog_ArchiveCardStyles";
import { Blog_ArchiveCardsContainer, Blog_ArchiveContainer } from "./Blog_ArchiveStyles";
import { Section_SubDivider } from "/styles/GlobalStyles";

const Blog_Archive = () => {
  return (
    <>
      <Section_SubDivider />
      <Blog_ArchiveContainer>
        <Archive_Title color="textFocused">blog archive</Archive_Title>
        <Archive_SubTitle color="accent">Collection of interesting reads</Archive_SubTitle>
        <Blog_ArchiveCardsContainer>
          <Blog_ArchiveCard />
          <Blog_ArchiveCard />
          <Blog_ArchiveCard />
        </Blog_ArchiveCardsContainer>
      </Blog_ArchiveContainer>
    </>
  );
};

export default Blog_Archive;
