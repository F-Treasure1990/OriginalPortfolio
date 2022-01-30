import { motion } from "framer-motion";
import styled from "styled-components";
import { Box } from "../../styles/GlobalStyles";

export const ContactForm_Container = styled(motion.div)`
  background-color: ${({ theme }) => theme.palette.secondary};
  /* position: absolute; */
  z-index: 10;
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactForm_Box = styled(Box)``;
