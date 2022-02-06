import { Projects_CardsContainer, Projects_Container } from "./ProjectsStyles";
import { useSelector } from "react-redux";
import { Section_Divider, Section_SubTitle, Section_Title } from "/styles/GlobalStyles";
import Project_Card from "./Project_Card/Project_Card";
import Project_Nav from "./Project_Nav/Project_Nav";
import projectsData from "/Data/projectsData.json";

const ProjectsSection = () => {
  const { projectCounter: isActive } = useSelector(state => state.ToggleSlice);
  const { cards } = projectsData;
  const filteredArray = cards.slice(0, Math.floor(cards.length / 2));
  return (
    <>
      <Projects_Container>
        <Section_Title color="textFocused">Projects</Section_Title>
        <Section_SubTitle color="accent">here are some projects I have developed</Section_SubTitle>
        <Section_Divider />
        <Project_Nav filteredArray={filteredArray} />
        <Projects_CardsContainer>
          <Project_Card card={cards[isActive === 0 ? 0 : isActive + isActive]} />
          <Project_Card card={cards[isActive === 0 ? 0 + 1 : isActive + (isActive + 1)]} />
        </Projects_CardsContainer>
      </Projects_Container>
    </>
  );
};

export default ProjectsSection;
