import { motion } from "framer-motion";
import styled from "styled-components";
import { FlexCenter } from "../../../styles/GlobalStyles";
import { Text } from "/styles/GlobalStyles";

export const Title = styled(Text)`
  margin-bottom: 12px;
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    text-align: center;
  }
`;

export const Description = styled(motion.div)`
  color: ${({ theme }) => theme?.palette?.textFocused};
  font-weight: 300;
  overflow: hidden;
  & > span {
    color: ${({ theme }) => theme?.palette?.accent};
  }
  ${({ theme }) => theme?.mediaQ.customUp(700)} {
    height: max-content !important;
  }
`;

export const ReadMoreBtn = styled.p`
  text-transform: uppercase;
  font-weight: 400;
  font-size: clamp(0.75rem, 0.44rem + 1.54vw, 0.88rem);
  ${FlexCenter}
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme?.palette?.accent};
  margin-top: clamp(1.25rem, 0.41rem + 4.21vw, 2.25rem);
  margin-bottom: 12px;
  cursor: pointer;
  ${({ theme }) => theme?.mediaQ.customUp(700)} {
    display: none;
  }
`;

export const InfoSectionLogoBotom = styled.div`
  text-align: center;
  flex-direction: column;
  ${FlexCenter};

  & > svg {
    margin-top: clamp(1.25rem, 0.41rem + 4.21vw, 2.25rem);
    margin-bottom: 12px;
    position: relative;
    ${({ theme }) => theme?.mediaQ.customDown(700)} {
      display: none;
    }
  }
`;
