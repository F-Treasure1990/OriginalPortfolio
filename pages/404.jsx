import React from "react";
import styled from "styled-components";
import Spaceship from "../icons/Spaceship";
import { Button, FlexCenter, Text } from "../styles/GlobalStyles";

const Page404_Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  padding-bottom: 48px;
  ${FlexCenter};
  flex-direction: column;
  background-image: url("landingBackground.svg");
  border-radius: 12px;
  margin-bottom: 40px;
`;

const Page404_Text = styled(Text)`
  font-size: clamp(1.5rem, 1.35rem + 0.73vw, 1.88rem);
  text-transform: uppercase;
  letter-spacing: 1.6px;
  margin-top: 36px;
  color: ${({ theme }) => theme?.palette?.error};
`;

const Page404_Button = styled(Button)`
  padding: 8px 16px;
  border-radius: 8px;
  width: 50%;
  margin-top: 24px;
  font-size: clamp(0.88rem, 0.83rem + 0.24vw, 1rem);
  transition: all ease 0.2s;
  :hover {
    color: ${({ theme }) => theme?.palette?.secondary};
    border: 1px solid ${({ theme }) => theme?.palette?.accent};
    background-color: ${({ theme }) => theme?.palette?.accent};
  }
`;

const Custom404 = () => {
  return (
    <Page404_Container>
      <Spaceship />
      <Page404_Text color="textFocused">page not found</Page404_Text>
      <Page404_Button>Go Home</Page404_Button>
    </Page404_Container>
  );
};

export default Custom404;
