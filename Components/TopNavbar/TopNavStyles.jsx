import styled from "styled-components";
import { Button, Text } from "/styles/GlobalStyles";

export const TopNav_Button = styled(Button)`
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  height: 40px;
  overflow: hidden;
  & > .messageText {
    transition: all 0.5s ease-out;
    ${({ theme }) => theme?.mediaQ.customDown(820)} {
      margin-right: -94px;
      padding: 8px;
    }
  }
  & > .icon {
    min-width: 16px;
    min-height: 16px;
  }
`;
