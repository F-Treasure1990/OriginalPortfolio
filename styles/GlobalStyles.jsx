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
  /* font-weight: ${({ theme, font }) => theme?.typography?.[font]?.fontWeight ?? "400"}; */
`;
export const TextPara = styled.p`
  color: ${({ theme, color }) => theme?.palette?.[color] ?? "red"};
  font-size: ${({ theme, font }) => theme?.typography?.[font]?.fontSize ?? "16"}px;
  font-weight: ${({ theme, font }) => theme?.typography?.[font]?.fontWeight ?? "400"};
`;

export const Section_Title = styled(Text)`
  font-size: clamp(1.5rem, 1.29rem + 1.05vw, 1.75rem);
  flex-basis: 100%;
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    margin-left: 12px;
  }
`;

export const Section_SubTitle = styled(Text)`
  font-size: clamp(0.88rem, 0.77rem + 0.53vw, 1rem);
  font-weight: 300;
  text-transform: capitalize;
  flex-basis: 100%;
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    margin-left: 12px;
  }
`;

export const Section_Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme?.palette?.main};
  flex-basis: 100%;
  margin-top: 24px;
  margin-bottom: 40px;
  transition: all ease 0.3s;
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    flex-basis: 90%;
    margin-left: 12px;
    margin-right: 12px;
  }
`;
export const Global_Btn = styled(Button)`
  width: ${({ w }) => w};
  font-size: 14px;
  padding: 8px;
  border-radius: 6px;
  margin-top: 24px;
  transition: all 0.3s ease;

  & > a {
    text-decoration: none;
    color: ${({ solid, theme }) => (solid ? theme?.palette?.main : theme?.palette?.accent)};
    height: 100%;
    width: 100%;
    transition: all 0.3s ease;
  }
`;
