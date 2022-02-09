import { motion } from "framer-motion";
import styled from "styled-components";
import { Box, Text } from "../../../styles/GlobalStyles";

export const Blog_CardContainer = styled(Box)`
  display: flex;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  ${({ theme }) => theme?.mediaQ.customDown(500)} {
    flex-direction: column;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const Blog_CardImg = styled(motion.img)`
  min-width: 240px;
  object-fit: cover;

  opacity: 0.6;
  transition: all ease 0.3s;
  ${({ theme }) => theme?.mediaQ.customDown(700)} {
    min-width: 200px;
  }
  ${({ theme }) => theme?.mediaQ.customDown(500)} {
    height: 120px;
  }
`;
export const Blog_CardTextContainer = styled.div`
  padding: 16px clamp(1rem, 0.58rem + 2.11vw, 1.5rem);
`;

export const Blog_CardTitle = styled(Text)`
  text-transform: capitalize;
  font-size: clamp(1rem, 0.79rem + 1.05vw, 1.25rem);
`;

export const Blog_CardDate = styled(Text)`
  text-transform: capitalize;
  font-size: clamp(0.75rem, 0.64rem + 0.53vw, 0.88rem);
  margin-bottom: 4px;
  font-weight: 300;
  transition: color ease 0.3s;
`;

export const Blog_CardDescription = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: clamp(0.75rem, 0.64rem + 0.53vw, 0.88rem);
  font-weight: 300;
`;
