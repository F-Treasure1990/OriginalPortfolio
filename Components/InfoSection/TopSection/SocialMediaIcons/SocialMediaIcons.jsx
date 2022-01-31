import { Container, MediaOption } from "./SocailMediaIconsStyles";
import { changeAccentColor } from "../../../../Store/ThemeSlice";
import { useDispatch } from "react-redux";

const SocialMediaIcons = () => {
  const MediaOptions = ["instagram", "linkedin", "github"];
  const dispatch = useDispatch();
  return (
    <>
      <Container>
        {MediaOptions.map((icon, index) => (
          <MediaOption
            key={`${icon}=${index}`}
            onClick={() => dispatch(changeAccentColor("#50FA7B"))}
          >
            <img src={`${icon}.png`} alt={`${icon}`} />
          </MediaOption>
        ))}
      </Container>
    </>
  );
};

export default SocialMediaIcons;
