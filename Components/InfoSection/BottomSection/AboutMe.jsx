import { Description, ReadMoreBtn, Title } from "./AboutMeStyles";

const AboutMe = () => {
  return (
    <>
      <Title color="textFocused">Hi, There 👋🏽 ...</Title>
      <Description color="textFocused">
        Thank you for taking time to explore my portfolio. My name is Fenton, a <span>self-taught developer</span> located in the city of Birmingham, England 🏴󠁧󠁢󠁥󠁮󠁧󠁿. Web-development has been my obsession for the last few years, exploring both front-end and back-end methodologies. I am seeking to find a
        code environment that will allow me to develop my coding and personal skills, paired with the ability to explore a multitude of softwares. 🙏🏽
      </Description>
      <ReadMoreBtn>
        Read More
        <img src="/arrow.png" alt="direction Arrow" />
      </ReadMoreBtn>
    </>
  );
};

export default AboutMe;
