import Link from "next/link";
import styled from "styled-components";
import { FlexCenter } from "/styles/GlobalStyles";

export const NavOptionsContainer = styled("div")`
  flex: 1 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease-out 0.3s;

  ${({ theme }) => theme?.mediaQ.customDown(700)} {
    margin: 0 clamp(0.75rem, -3.31rem + 13vw, 2.38rem);
  }
`;

export const NavOptionContainer = styled("div")`
  &:not(:last-child) {
    margin-right: 5%;
  }
  position: relative;
  height: 100%;
  ${FlexCenter}
  text-transform: capitalize;
  cursor: pointer;
  letter-spacing: 0.6px;
  transition: margin 0.3s ease-out;
  &:hover .navOptionText {
    color: ${({ theme }) => theme?.palette?.textFocused ?? "red"};
  }
  ${({ theme }) => theme?.mediaQ.customDown(700)} {
    width: 100%;
    background-color: ${({ theme, clicked }) => clicked && theme?.palette?.secondary};
    height: 90%;
    border-radius: 8px;
    &:not(:last-child) {
      margin-right: 0;
    }
    &:hover {
      background-color: ${({ theme }) => theme?.palette?.secondary ?? "red"};
    }
  }
`;

export const NavOption = styled.a`
  position: relative;
  height: 80%;
  transition: all 0.3s ease-out;
  font-weight: 400;
  ${FlexCenter}
  & > img {
    ${({ theme }) => theme?.mediaQ.customUp(700)} {
      display: none;
    }
  }

  & .navOptionText {
    ${({ theme }) => theme?.mediaQ.customDown(700)} {
      display: none;
    }
  }
`;

export const NavOptionAnimation = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  overflow: hidden;
  top: 40px;
  border-radius: 8px;
  ${({ theme }) => theme?.mediaQ.customDown(700)} {
    width: 200%;
  }
  & > .animation {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme?.palette?.accent ?? "red"};
  }
`;
