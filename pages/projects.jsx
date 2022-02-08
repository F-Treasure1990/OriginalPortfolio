import ProjectsSection from "../Components/Projects/Projects";
import Projects_Archive from "../Components/Projects_Archive/Projects_Archive";
import SubNav from "../Components/SubNav/SubNav";

import projectsData from "/Data/projectsData.json";
const Projects = () => {
  const { cards } = projectsData;

  return (
    <>
      <SubNav />
      <ProjectsSection cards={cards} />
      <Projects_Archive />
    </>
  );
};

export default Projects;
