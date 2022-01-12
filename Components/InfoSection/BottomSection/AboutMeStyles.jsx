import styled from "styled-components";
import { Text } from "/styles/GlobalStyles";

export const Title = styled(Text)`
  margin-bottom: 12px;
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    text-align: center;
  }
`;

export const Description = styled(Text)`
  font-weight: 300;

  & > span {
    color: ${({ theme }) => theme?.palette?.accent};
  }
`;

export const ReadMoreBtn = styled.p`
  text-transform: uppercase;
  font-weight: 400;
  font-size: clamp(0.75rem, 0.44rem + 1.54vw, 0.88rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme?.palette?.accent};
  margin-top: clamp(1.25rem, 0.41rem + 4.21vw, 2.25rem);
  cursor: pointer;
`;
