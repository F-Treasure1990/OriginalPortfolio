import { motion } from "framer-motion";
import styled from "styled-components";
import { FlexCenter } from "../../../styles/GlobalStyles";
import { Box } from "/styles/GlobalStyles";

export const Project_CardContainer = styled(Box)`
  overflow: hidden;
  height: auto;
  cursor: pointer;
  position: relative;
  &:hover .Project_CardImg {
    transform: scale(1.2);
  }
`;
