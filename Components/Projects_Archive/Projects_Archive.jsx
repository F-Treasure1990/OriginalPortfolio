import { useSelector } from "react-redux";
import { Archive_SubTitle, Archive_Title, Section_Divider, Section_SubDivider } from "../../styles/GlobalStyles";
import Projects_ArchiveCard from "./Projects_ArchiveCard/Projects_ArchiveCard";
import { Archive_ProjectsContainer, Archive_ProjectDescription, Archive_ProjectSubTitle, Archive_ProjectTitle, Projects_ArchiveContainer } from "./Projects_ArchiveStyles";

const Projects_Archive = () => {
  const cards = useSelector(state => state.ProjectSlice);
  return (
    <>
      <Section_SubDivider />
      <Projects_ArchiveContainer>
        <Archive_Title color="textFocused">archive</Archive_Title>
        <Archive_SubTitle color="accent">A Collection of noteworthy projects</Archive_SubTitle>
        <Archive_ProjectsContainer>
          {cards.map((c, i) => (
            <Projects_ArchiveCard card={c} key={`${i}-card`} />
          ))}
        </Archive_ProjectsContainer>
      </Projects_ArchiveContainer>
    </>
  );
};
export default Projects_Archive;
