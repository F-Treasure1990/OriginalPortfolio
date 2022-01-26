import { motion } from "framer-motion";
import styled from "styled-components";
import { Box } from "../../styles/GlobalStyles";

export const ToolBelt_Container = styled.section`
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    margin: 0 12px;
  }
`;

export const ToolBelt_CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(0.5rem, 0.08rem + 2.11vw, 1rem);
  transition: all ease 0.3s;
  margin-bottom: 40px;
  & .selected {
    outline: 1px solid ${({ theme }) => theme?.palette?.accent};
    /* outline-offset: 2px; */
    font-weight: 400;
    background: transparent;
    & > p {
      color: ${({ theme }) => theme?.palette?.accent};
    }
  }
`;

export const ToolBelt_OptionsContainer = styled(Box)`
  /* display: flex; */
  padding: clamp(0.75rem, 0.12rem + 3.16vw, 1.5rem);
  margin: 0 auto;
  width: 90%;
  transition: all ease 0.5s;
  overflow: hidden;
  > div {
    display: grid;
    gap: 16px;
  }
  ${({ theme }) => theme?.mediaQ.customDown(600)} {
    width: 100%;
  }
`;

export const ToolBelt_Category = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(0.75rem, 0.54rem + 1.05vw, 1rem);
  font-weight: 400;
  text-align: center;
  padding: 0 clamp(0.38rem, 0.06rem + 1.58vw, 0.75rem);
  letter-spacing: 1.2px;
  cursor: pointer;
  transition: all ease 0.3s;
`;