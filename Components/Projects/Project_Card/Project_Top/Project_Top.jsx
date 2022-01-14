import { Project_CardImg, Project_CardStack, Project_TopSectionContainer, Project_GithubLinkContainer } from "./Project_TopStyles";
import GithubLink from "/icons/GithubLink.jsx";

const Project_TopSection = ({ card }) => {
  return (
    <Project_TopSectionContainer>
      <Project_CardImg src={card.img} alt="project image" />
    </Project_TopSectionContainer>
  );
};

export default Project_TopSection;
