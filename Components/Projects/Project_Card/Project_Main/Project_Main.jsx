import { Text } from "/styles/GlobalStyles";
import { Project_DescriptionContainer, Projects_MainContainer, Project_CardSubTitle, Project_CardTitle, Project_ViewProjectBtn } from "./Project_MainStyles";
import { useState } from "react";
import { Global_Btn } from "../../../../styles/GlobalStyles";

const Project_Main = ({ card }) => {
  const [view, setView] = useState(false);
  return (
    <Projects_MainContainer>
      <Project_CardTitle color="textFocused">{card.title}</Project_CardTitle>
      <Project_CardSubTitle color="accent">{card.postDate}</Project_CardSubTitle>
      <Project_DescriptionContainer>
        <Text color="text">{card.description}</Text>
        {/* <Text color="text">{card.description[1]}</Text> */}
      </Project_DescriptionContainer>
      <Global_Btn w="100%" solid={view} onMouseEnter={() => setView(true)} onMouseLeave={() => setView(false)}>
        <a href="#">view project</a>
      </Global_Btn>
    </Projects_MainContainer>
  );
};

export default Project_Main;
