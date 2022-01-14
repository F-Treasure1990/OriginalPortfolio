import styled from "styled-components";
import { Box } from "/styles/GlobalStyles";

export const Project_CardContainer = styled(Box)`
  overflow: hidden;
  position: relative;
`;

export const Project_GithubLinkContainer = styled.a`
  position: absolute;
  background-color: ${({ theme }) => theme?.palette?.secondary};
  padding: 12px 16px;
  top: 12px;
  right: 12px;
  border-radius: 6px;
  cursor: pointer;

  &:hover > svg {
    fill: ${({ theme }) => theme?.palette?.textFocused};
  }

  & > svg {
    transition: all 0.3s ease;
    fill: ${({ theme }) => theme?.palette?.text};
  }
`;
