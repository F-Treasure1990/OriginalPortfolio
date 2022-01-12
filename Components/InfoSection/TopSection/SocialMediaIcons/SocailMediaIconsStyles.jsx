import styled from "styled-components";
import { FlexCenter } from "/styles/GlobalStyles";

export const Container = styled.section`
  flex-basis: 228px;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all 0.3s ease-out;
  ${({ theme }) => theme?.mediaQ.customDown(700)} {
    width: 100%;
    margin-top: 24px;
    flex-basis: max-content;
    justify-content: center;
  }
`;

export const MediaOption = styled.div`
  min-width: clamp(3.38rem, 0.75rem + 6vw, 3.75rem);
  height: clamp(2.88rem, 0.25rem + 6vw, 3.25rem);
  border: 1px solid ${({ theme }) => theme?.palette?.accent};
  border-radius: 8px;
  margin: 0 3%;
  transition: all 0.3s ease-out;
  ${FlexCenter}
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme?.palette?.secondary};
  }

  & > img {
    max-width: 40px;
    transition: all ease-out 0.3s;
    ${({ theme }) => theme?.mediaQ.customDown(700)} {
      max-width: 20px;
    }
  }
`;
