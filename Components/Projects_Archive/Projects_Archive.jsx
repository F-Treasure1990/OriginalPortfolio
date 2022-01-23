import useFetch from "../../Hooks/useFetch";
import { Archive_SubTitle, Archive_Title, Section_SubDivider } from "../../styles/GlobalStyles";
import Projects_ArchiveCard from "./Projects_ArchiveCard/Projects_ArchiveCard";
import { Archive_ProjectsContainer, Projects_ArchiveContainer } from "./Projects_ArchiveStyles";
import projectData from "/Data/projectsData.json";

const Projects_Archive = () => {
  const { cards } = projectData;
  return (
    <>
      <Section_SubDivider />
      <Archive_Title color="textFocused">archive</Archive_Title>
      <Archive_SubTitle color="accent">A Collection of noteworthy projects</Archive_SubTitle>
      <Archive_ProjectsContainer>
        {cards.map((c, i) => (
          <Projects_ArchiveCard card={c} key={`${i}-card`} />
        ))}
      </Archive_ProjectsContainer>
    </>
  );
};
export default Projects_Archive;
