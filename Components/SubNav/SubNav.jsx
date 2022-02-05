import { ColorPicker } from "../ColorPicker/ColorPicker";
import { AvatarImg } from "../InfoSection/TopSection/AvatarDP/AvatarDPStyles";
import { MediaOption } from "../InfoSection/TopSection/SocialMediaIcons/SocailMediaIconsStyles";
import {
  SubNav_ColorPickerContainer,
  SubNav_Container,
  SubNav_DP,
  SubNav_SocialMediaContainer,
  SubNav_SocialMediaOption
} from "./SubNavStyles";

const SubNav = () => {
  const MediaOptions = ["instagram", "linkedin", "github"];
  const DPs = [
    "fist_bump",
    "laptop",
    "tongue",
    "smile",
    "fingerscrossed",
    "meditating",
    "thumbs_up",
    "peace",
    "wink",
    "pray"
  ];
  const mediaURl = media => {
    if (media === "instagram") {
      return "https://www.instagram.com/";
    } else if (media === "linkedin") {
      return "https://gb.linkedin.com/";
    } else if (media === "github") {
      return "https://github.com/F-Treasure1990";
    }
  };
  return (
    <SubNav_Container>
      <SubNav_ColorPickerContainer>
        <ColorPicker useMargin={false} />
      </SubNav_ColorPickerContainer>
      <SubNav_DP>
        <AvatarImg src={`/DisplayPics/avatar_${DPs[Math.floor(Math.random() * DPs.length)]}.png`} />
      </SubNav_DP>

      <SubNav_SocialMediaContainer>
        {MediaOptions.map((icon, index) => (
          <a href={mediaURl(icon)} target="_blank">
            <SubNav_SocialMediaOption key={`${icon}=${index}`}>
              <img src={`${icon}.png`} alt={`${icon}`} />
            </SubNav_SocialMediaOption>
          </a>
        ))}
      </SubNav_SocialMediaContainer>
    </SubNav_Container>
  );
};
export default SubNav;
