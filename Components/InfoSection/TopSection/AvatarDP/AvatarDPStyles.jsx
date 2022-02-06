import { urlObjectKeys } from "next/dist/shared/lib/utils";
import styled from "styled-components";
import { FlexCenter } from "/styles/GlobalStyles";
import { motion } from "framer-motion";
export const AvatarRing = styled.div`
  height: clamp(8.75rem, 7.87rem + 4.41vw, 10.63rem);
  padding: 8px;
  aspect-ratio: 1/1;

  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme?.palette?.accent};
  background: ${({ theme }) => theme?.palette?.main};
  margin: calc(clamp(4rem, 3.75rem + 4vw, 6.25rem) * -1) 24px 0px 24px;
  ${FlexCenter}
  transition: all ease 0.3s;
`;

export const AvatarImg = styled(motion.img)`
  height: 100%;
  width: 100%;
  border-radius: 100%;
`;
