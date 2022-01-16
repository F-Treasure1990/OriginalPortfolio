import { Text } from "/styles/GlobalStyles";
import { Project_DescriptionContainer, Project_CardMainContainer, Project_CardSubTitle, Project_CardTitle, Project_ViewProjectBtn } from "./Project_MainStyles";

const Project_Main = ({ card }) => {
  return (
    <Project_CardMainContainer>
      <Project_CardTitle color="textFocused">{card.title}</Project_CardTitle>
      <Project_CardSubTitle color="accent">{card.postDate}</Project_CardSubTitle>
      <Project_DescriptionContainer>
        <Text color="text">{card.description.substring(0, 180)}...</Text>
      </Project_DescriptionContainer>
    </Project_CardMainContainer>
  );
};

export default Project_Main;
