import styled from "styled-components";
import { Box, Button } from "/styles/GlobalStyles";

export const Container = styled(Box)`
  margin-top: 150px;
  padding: clamp(0.75rem, -1rem + 4vw, 1.5rem);
  display: flex;
  position: relative;
`;

export const TopSectionContainer = styled.section`
  display: flex;
  min-width: 100%;
  height: max-content;
  justify-content: space-between;
  ${({ theme }) => theme?.mediaQ.customDown(700)} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-basis: 228px;
  ${({ theme }) => theme?.mediaQ.customDown(700)} {
    display: none;
  }
`;
export const MsgButton = styled(Button)`
  position: absolute;
  padding: 1.2% 2.4%;
  border-radius: clamp(0.38rem, 0.08rem + 0.67vw, 0.5rem);
  font-size: clamp(0.75rem, 0.17rem + 1.33vw, 1rem);
  height: 44px;

  & > div {
    transition: all ease;
  }
`;
