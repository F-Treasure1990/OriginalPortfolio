import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import UnderConstructionMain from "../../UnderConstruction/UnderConstructionMain";

import Project_Main from "./Project_CardMain/Project_Main";
import { Project_CardContainer } from "./Project_CardStyles";
import Project_Top from "./Project_CardTop/Project_Top";

const Project_Card = ({ card }) => {
  const [displayConstruction, setDisplayConstruction] = useState(false);
  const underConstruction = () => {
    setDisplayConstruction(!displayConstruction);
    setTimeout(() => {
      setDisplayConstruction(false);
    }, 1500);
  };
  return (
    <>
      <Project_CardContainer h="max-content" onClick={underConstruction}>
        <AnimatePresence>{displayConstruction && <UnderConstructionMain />}</AnimatePresence>

        <Project_Top card={card} />
        <Project_Main card={card} />
      </Project_CardContainer>
    </>
  );
};

export default Project_Card;
