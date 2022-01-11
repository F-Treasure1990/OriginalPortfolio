import styled from "styled-components";
import { Box, Button } from "/styles/GlobalStyles";

export const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  transition: all 0.5s ease-out;
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    position: absolute;
    bottom: 0;
    border-radius: 0;
  }

  // LOGO
  & > svg {
    margin-left: max(2.4%, 12px);
    transition: all 0.5s ease-out;
    ${({ theme }) => theme?.mediaQ.customDown(500)} {
      margin-left: -34px;
    }
  }
`;

export const Message_Button = styled(Button)`
  padding: 8px 16px;
  border-radius: 6px;
  height: 40px;
  overflow: hidden;
  margin-right: 12px;
  font-size: 14px;
  transition: all 0.5s ease-out;
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    margin-right: -6ch;
  }
  & > .messageText {
    transition: all 0.5s ease-out;
    ${({ theme }) => theme?.mediaQ.customDown(750)} {
      margin-right: -94px;
      padding: 8px;
    }
  }
  & > .icon {
    min-width: 16px;
    min-height: 16px;
  }
`;
