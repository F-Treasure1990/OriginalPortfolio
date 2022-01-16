import Project_Main from "./Project_CardMain/Project_Main";
import { Project_CardContainer } from "./Project_CardStyles";
import Project_Top from "./Project_CardTop/Project_Top";

const Project_Card = ({ card }) => {
  return (
    <>
      <Project_CardContainer h="max-content">
        <Project_Top card={card} />
        <Project_Main card={card} />
      </Project_CardContainer>
    </>
  );
};

export default Project_Card;
