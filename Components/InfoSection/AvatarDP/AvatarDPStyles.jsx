import styled from "styled-components";
import { FlexCenter } from "/styles/GlobalStyles";

export const AvatarRing = styled.div`
  height: clamp(8.75rem, 7.87rem + 4.41vw, 10.63rem);
  padding: 10px;
  aspect-ratio: 1/1;
  /* background-color: red; */
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme?.palette?.accent};
  background: ${({ theme }) => theme?.palette?.main};
  margin: calc(clamp(5rem, 3.75rem + 4vw, 6.25rem) * -1) 24px 0px 24px;
  ${FlexCenter}
`;

export const AvatarImg = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 100%;
  background: url("/avatar_fist_bump@2x.png") center no-repeat;
  background-size: auto;
  background-size: cover;
`;
