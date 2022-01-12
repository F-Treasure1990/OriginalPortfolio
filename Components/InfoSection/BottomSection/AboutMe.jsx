import { useState } from "react";
import { useTheme } from "styled-components";
import { Description, InfoSectionLogoBotom, ReadMoreBtn, Title } from "./AboutMeStyles";
import Logo from "/icons/Logo";

const AboutMe = () => {
  const { palette } = useTheme();
  const [readMore, setReadMore] = useState(false);
  const v = {
    i: { height: "130px" },
    a: { height: "max-content" }
  };
  return (
    <>
      <Title color="textFocused">Hi, There 👋🏽 ...</Title>
      <Description readMore={readMore} variants={v} animate={readMore ? "a" : "i"} initial="i" transition={{ type: "spring" }}>
        Thank you for taking the time to explore my portfolio. My name is Fenton, and I am a <span>self-taught developer</span> located in the city of Birmingham, England 🏴󠁧󠁢󠁥󠁮󠁧󠁿. Web-development has been my obsession for many years, exploring both front-end and back-end methodologies. I enjoy learning
        and experimenting with code, and I am seeking a working environment that will enable me to further develop my coding and professional skills, paired with opportunities to explore a multitude of different software. 🙏🏽
      </Description>
      <InfoSectionLogoBotom>
        <ReadMoreBtn onClick={() => setReadMore(!readMore)}>
          Read More
          <img src="/arrow.png" alt="direction Arrow" />
        </ReadMoreBtn>
        <Logo size="34" color={palette?.accent} />
      </InfoSectionLogoBotom>
    </>
  );
};

export default AboutMe;
