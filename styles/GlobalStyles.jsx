import styled, { css } from "styled-components";

export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  color: ${({ solid, theme }) => (solid ? theme?.palette?.secondary : theme?.palette?.accent)};
  background-color: ${({ solid, theme }) => (solid ? theme?.palette?.accent : "transparent")};
  border: ${({ solid, theme }) => (solid ? "1px solid transparent" : `1px solid ${theme?.palette?.accent}`)};
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  ${FlexCenter}
  column-gap: 12px;
`;

export const Box = styled.div`
  height: ${({ h }) => h};
  width: ${({ w }) => w};
  border-radius: ${({ rad }) => rad ?? 6}px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.16);
  background-color: ${({ theme }) => theme?.palette?.main};
  border-radius: 6px;
`;

export const Text = styled.p`
  color: ${({ theme, color }) => theme?.palette?.[color] ?? "red"};
  /* font-size: ${({ theme, font }) => theme?.typography?.[font]?.fontSize ?? "16"}px; */
  font-weight: ${({ theme, font }) => theme?.typography?.[font]?.fontWeight ?? "400"};
`;
export const TextPara = styled.p`
  color: ${({ theme, color }) => theme?.palette?.[color] ?? "red"};
  font-size: ${({ theme, font }) => theme?.typography?.[font]?.fontSize ?? "16"}px;
  font-weight: ${({ theme, font }) => theme?.typography?.[font]?.fontWeight ?? "400"};
`;
