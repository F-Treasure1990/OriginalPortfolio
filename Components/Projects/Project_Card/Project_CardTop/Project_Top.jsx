import { Project_CardImg, Project_CardTopContainer } from "./Project_TopStyles";

const Project_TopSection = ({ card }) => {
  return (
    <Project_CardTopContainer>
      <Project_CardImg
        className="Project_CardImg"
        src={card?.img}
        alt="Project image"
        loading="eager"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    </Project_CardTopContainer>
  );
};

export default Project_TopSection;
