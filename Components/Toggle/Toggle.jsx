import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const Toggle_Container = styled(motion.div)`
  display: flex;
  justify-content: ${({ toggleAll }) => (toggleAll ? "flex-end" : "flex-start")};
  width: 48px;
  height: 26px;
  /* background-color: ${({ theme }) => theme?.palette?.accent}; */
  border: 2px solid ${({ theme }) => theme?.palette?.accent};
  border-radius: 30px;
  padding: 4px;
  cursor: pointer;
  position: absolute;
  right: 24px;
  top: 16px;
`;

const Toggle_Handler = styled(motion.div)`
  height: 100%;
  aspect-ratio: 1/1;
  background-color: ${({ theme }) => theme?.palette?.textFocused};
  border-radius: 100%;
`;
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

const Toggle = ({ toggleAll, setToggleAll }) => {
  return (
    <Toggle_Container toggleAll={toggleAll} onClick={() => setToggleAll(!toggleAll)}>
      <Toggle_Handler layout transition={spring} />
    </Toggle_Container>
  );
};

export default Toggle;
