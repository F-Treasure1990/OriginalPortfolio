import styled from "styled-components";
import { Section_Divider, Text, Button } from "../../styles/GlobalStyles";

export const Footer_container = styled.section`
  margin-bottom: 50px;
  display: flex;
  padding: 12px 0 24px 0;
  background-image: url("landingBackground.svg");
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Footer_LogoDividerContainer = styled.div`
  height: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    padding: 0 12px;
  }

  & .Footer_LogoContainer {
    background-color: ${({ theme }) => theme?.palette?.secondary};
    min-width: max-content;
    padding: 0 16px;
    margin-right: 14px;
  }

  & > :not(:nth-child(2)) {
    margin: 0;
  }
`;

export const Footer_TextContainer = styled.div`
  width: clamp(20rem, 11.58rem + 42.11vw, 30rem);
  text-align: center;
`;

export const Footer_Title = styled(Text)`
  text-transform: capitalize;
  font-size: clamp(1.5rem, 1.29rem + 1.05vw, 1.75rem);
  margin-top: 16px;
  color: ${({ theme }) => theme?.palette?.accent};
  transition: all ease 0.3s;
`;

export const Footer_Description = styled(Text)`
  font-weight: 300;
  font-size: clamp(0.75rem, 0.64rem + 0.53vw, 0.88rem);
  margin-top: 12px;
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    padding: 0 12px;
  }
`;

export const Footer_Button = styled(Button)`
  width: 60%;
  padding: 10px 0;
  border-radius: 8px;
  transition: all ease 0.3s;
  margin: 24px auto 0 auto;
  font-size: clamp(0.88rem, 0.77rem + 0.53vw, 1rem);
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    width: 70%;
    padding: 8px 0;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme?.palette?.secondary};
    color: ${({ theme }) => theme?.palette?.secondary};
    background-color: ${({ theme }) => theme?.palette?.accent};
  }
`;
