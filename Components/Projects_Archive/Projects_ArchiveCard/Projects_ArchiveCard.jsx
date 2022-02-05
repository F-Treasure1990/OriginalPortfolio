import { useTheme } from "styled-components";
import ArchiveFolder from "../../../icons/ArchiveFolder";
import {
  Projects_ArchiveCardContainer,
  Archive_ProjectSubTitle,
  Archive_ProjectTitle
} from "./Projects_ArchiveCardStyles";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import UnderConstructionArchive from "../../UnderConstruction/UnderConstructionArchive";

const Projects_ArchiveCard = ({ card }) => {
  const { palette } = useTheme();
  const [displayCon, setDisplayCon] = useState(false);
  const underConstruction = () => {
    setDisplayCon(!displayCon);
    setTimeout(() => {
      setDisplayCon(false);
    }, 1500);
  };
  return (
    <Projects_ArchiveCardContainer h="100%" onClick={underConstruction}>
      <AnimatePresence>{displayCon && <UnderConstructionArchive size="80px" />}</AnimatePresence>

      <ArchiveFolder d={20} c={palette?.accent} />
      <Archive_ProjectTitle color="textFocused">{card.title}</Archive_ProjectTitle>
      <Archive_ProjectSubTitle color="accent">
        {card.professional ? "professional" : "personal"} project
      </Archive_ProjectSubTitle>
    </Projects_ArchiveCardContainer>
  );
};

export default Projects_ArchiveCard;
