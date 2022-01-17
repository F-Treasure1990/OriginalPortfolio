import styled from "styled-components";

export const Blog_CardsContainer = styled.section`
  transition: all ease;
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    margin: 0 12px;
  }
`;
