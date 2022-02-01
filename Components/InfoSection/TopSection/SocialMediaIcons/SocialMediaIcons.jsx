import { Container, MediaOption } from "./SocailMediaIconsStyles";

const SocialMediaIcons = () => {
  const MediaOptions = ["instagram", "linkedin", "github"];

  return (
    <>
      <Container>
        {MediaOptions.map((icon, index) => (
          <MediaOption key={`${icon}=${index}`}>
            <img src={`${icon}.png`} alt={`${icon}`} />
          </MediaOption>
        ))}
      </Container>
    </>
  );
};

export default SocialMediaIcons;
