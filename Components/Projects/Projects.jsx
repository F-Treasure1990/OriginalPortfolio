import { Projects_CardsContainer, Projects_Container } from "./ProjectsStyles";
import { useSelector, useDispatch } from "react-redux";
import { Section_Divider, Section_SubTitle, Section_Title } from "/styles/GlobalStyles";
import Project_Card from "./Project_Card/Project_Card";
import Project_Nav from "./Project_Nav/Project_Nav";

const ProjectsSection = () => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.ProjectSlice);
  const { isActive } = useSelector(state => state.ToggleSlice);
  const filteredArray = cards.slice(0, Math.floor(cards.length / 2));
  return (
    <>
      <Projects_Container>
        <Section_Title color="textFocused">Projects</Section_Title>
        <Section_SubTitle color="accent">some thigns i have build</Section_SubTitle>
        <Section_Divider />
        <Projects_CardsContainer>
          <Project_Card card={cards[isActive === 0 ? 0 : isActive + isActive]} />
          <Project_Card card={cards[isActive === 0 ? 0 + 1 : isActive + (isActive + 1)]} />
        </Projects_CardsContainer>
        <Project_Nav filteredArray={filteredArray} />
      </Projects_Container>
    </>
  );
};

export default ProjectsSection;
