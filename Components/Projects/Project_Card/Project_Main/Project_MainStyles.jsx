import styled from "styled-components";
import { Text, Button } from "/styles/GlobalStyles";

export const Projects_MainContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 24px;
  border-top: 1px solid ${({ theme }) => theme?.palette?.accent};
`;

export const Project_CardTitle = styled(Text)`
  flex-basis: 100%;
  text-transform: capitalize;
  font-size: 20px;
  letter-spacing: 0.8px;
`;

export const Project_CardSubTitle = styled(Text)`
  flex-basis: 100%;
  text-transform: capitalize;
  font-size: 14px;
  letter-spacing: 0.8px;
  margin-top: 4px;
`;

export const Project_DescriptionContainer = styled.div`
  letter-spacing: 0.5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-weight: 300;
  margin-top: 16px;
  font-size: 14px;
  gap: 8px;
  height: 10ch;
`;

export const Project_ViewProjectBtn = styled(Button)`
  width: 100%;
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
