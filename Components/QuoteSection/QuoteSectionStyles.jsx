import styled from "styled-components";

export const QuoteContainer = styled.section`
  border-radius: 12px;
  margin: 50px 0;
  min-height: 200px;
`;

export const Quote = styled.div`
  background-image: url("landingBackground.svg");
  width: auto;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  letter-spacing: 1px;
  padding: 12px;
  text-align: center;

  > .author {
  }
  > .quote {
    font-weight: 300;
    font-size: clamp(1rem, 0.58rem + 2.11vw, 1.5rem);
    margin-top: 12px;
  }
`;
