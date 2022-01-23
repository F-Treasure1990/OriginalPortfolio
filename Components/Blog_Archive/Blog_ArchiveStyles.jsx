import styled from "styled-components";

export const Blog_ArchiveContainer = styled.section``;

export const Blog_ArchiveCardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-top: 24px;
  gap: clamp(0.38rem, 0.06rem + 1.58vw, 0.75rem);
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    margin: 24px 12px;
  }
`;
