import { motion } from "framer-motion";
import styled from "styled-components";
import { Box, FlexCenter, Text } from "../../styles/GlobalStyles";

export const Resources_Container = styled.section``;

export const Resources_TableContainer = styled.div`
  margin-bottom: 12px;
  overflow: hidden;
`;

export const Resources_TableTitle = styled(Box)`
  background-color: ${({ theme }) => theme?.palette?.main};
  color: ${({ theme }) => theme?.palette?.textFocused};
  /* font-weight: 300; */
  font-size: 16px;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  cursor: pointer;
  user-select: none;

  > svg {
    transform: ${({ toggle }) => (toggle ? "rotate(270deg)" : "rotate(90deg)")};
    margin-right: 16px;
    transition: all ease-out 0.5s;
  }
`;

export const Resource_Info = styled(motion.div)`
  display: grid;
  grid-template-columns: 150px 1fr 40px;
  grid-gap: 16px;
  padding: 12px;
  overflow: hidden;

  :not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme?.palette?.main};
  }
  > .title {
    color: ${({ theme }) => theme?.palette?.textFocused};
    ${FlexCenter}
    font-weight: 300;

    text-transform: capitalize;
  }

  > .description {
    font-size: 14px;
    font-weight: 300;
    color: ${({ theme }) => theme?.palette?.text};
  }

  > .linkIcon {
    ${FlexCenter};
    cursor: pointer;
  }
`;
