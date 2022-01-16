import { useTheme } from "styled-components";
import ArchiveFolder from "../../../icons/ArchiveFolder";
import { Projects_ArchiveCardContainer, Archive_ProjectSubTitle, Archive_ProjectTitle } from "./Projects_ArchiveCardStyles";

const Projects_ArchiveCard = ({ card }) => {
  const { palette } = useTheme();
  return (
    <Projects_ArchiveCardContainer h="100%">
      <ArchiveFolder d={20} c={palette?.accent} />
      <Archive_ProjectTitle color="textFocused">{card.title}</Archive_ProjectTitle>
      <Archive_ProjectSubTitle color="accent">{card.professional ? "profesional" : "personal"} project</Archive_ProjectSubTitle>
    </Projects_ArchiveCardContainer>
  );
};

export default Projects_ArchiveCard;
