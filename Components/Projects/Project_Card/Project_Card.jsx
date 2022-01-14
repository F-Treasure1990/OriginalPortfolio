import GithubLink from "/icons/GithubLink";
import Project_Main from "./Project_Main/Project_Main";
import { Project_GithubLinkContainer, Project_CardContainer } from "./Project_CardStyles";
import Project_TopSection from "./Project_Top/Project_Top";

const Project_Card = ({ card }) => {
  console.log(card);
  return (
    <>
      <Project_CardContainer w="492px" h="max-content">
        <Project_TopSection card={card} />
        {/* github link top right of cards */}
        <Project_GithubLinkContainer href="#">
          <GithubLink size="20" />
        </Project_GithubLinkContainer>

        <Project_Main card={card} />
      </Project_CardContainer>
    </>
  );
};

export default Project_Card;
