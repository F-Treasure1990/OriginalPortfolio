import styled from "styled-components";

export const Project_CardTopContainer = styled.section`
  overflow: hidden;
  position: relative;
  height: clamp(6.25rem, 5.2rem + 5.26vw, 7.5rem);
`;

export const Project_CardImg = styled.img`
  height: 100%;
  width: 100%;
  opacity: 0.8;
  transition: all ease 0.5s;
  object-fit: cover;
`;
