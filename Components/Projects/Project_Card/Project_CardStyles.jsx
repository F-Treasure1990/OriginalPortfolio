import styled from "styled-components";
import { Box } from "/styles/GlobalStyles";

export const Project_CardContainer = styled(Box)`
  overflow: hidden;
  height: auto;
  cursor: pointer;

  &:hover .Project_CardImg {
    transform: scale(1.2);
  }
`;
