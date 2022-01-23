import { Project_CardImg, Project_CardTopContainer } from "./Project_TopStyles";

const Project_TopSection = ({ card }) => {
  console.log(card);
  return (
    <Project_CardTopContainer>
      <Project_CardImg className="Project_CardImg" src={card?.img} alt="Project image" />
    </Project_CardTopContainer>
  );
};

export default Project_TopSection;
