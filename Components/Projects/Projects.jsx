import { Projects_CardContainer, Projects_Container } from "./ProjectsStyles";
import { useSelector, useDispatch } from "react-redux";
import { Section_Divider, Section_SubTitle, Section_Title } from "../../styles/GlobalStyles";
import Project_Card from "./Project_Card/Project_Card";

const ProjectsSection = () => {
  const cards = useSelector(state => state.projectsSlice);
  return (
    <>
      <Projects_Container>
        <Section_Title color="textFocused">Projects</Section_Title>
        <Section_SubTitle color="accent">some things i have built</Section_SubTitle>
        <Section_Divider />
        <Projects_CardContainer>
          {cards.map((card, index) => (
            <Project_Card card={card} key={`${card}-${index}`} />
          ))}
        </Projects_CardContainer>
      </Projects_Container>
    </>
  );
};

export default ProjectsSection;
