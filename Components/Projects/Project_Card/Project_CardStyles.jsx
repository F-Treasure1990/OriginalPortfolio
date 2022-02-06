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
  ${({ theme }) => theme?.mediaQ.customDown(662)} {
    min-height: 400px;
  }
  ${({ theme }) => theme?.mediaQ.customDown(662)} {
    min-height: 410px;
  }
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    min-height: 299px;
  }
`;
