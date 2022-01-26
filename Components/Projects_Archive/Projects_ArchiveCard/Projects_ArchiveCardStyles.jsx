import styled from "styled-components";
import { Box, Text } from "../../../styles/GlobalStyles";

export const Projects_ArchiveCardContainer = styled(Box)`
  padding: 16px;
  cursor: pointer;
  transition: all ease-out 0.3s;
  border: solid 1px ${({ theme }) => theme?.palette?.secondary};

  &:hover {
    border: solid 1px ${({ theme }) => theme?.palette?.accent};
  }

  & > svg {
    margin-bottom: 12px;
  }
`;

export const Archive_ProjectTitle = styled(Text)`
  font-size: clamp(0.88rem, 0.77rem + 0.53vw, 1rem);
  line-height: 1.4;
  text-transform: capitalize;
`;

export const Archive_ProjectSubTitle = styled(Text)`
  font-size: clamp(0.63rem, 0.52rem + 0.53vw, 0.75rem);
  text-transform: capitalize;
  font-weight: 300;
  margin: 4px 0 8px 0;
`;