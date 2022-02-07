import AvatarImg from "../AvatarImg/AvatarImg";
import { ColorPicker } from "../ColorPicker/ColorPicker";

import {
  SubNav_ColorPickerContainer,
  SubNav_Container,
  SubNav_DP,
  SubNav_SocialMediaContainer,
  SubNav_SocialMediaOption
} from "./SubNavStyles";

const SubNav = () => {
  const MediaOptions = ["instagram", "linkedin", "github"];

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
        <AvatarImg />
      </SubNav_DP>

      <SubNav_SocialMediaContainer>
        {MediaOptions.map((icon, index) => (
          <a href={mediaURl(icon)} target="_blank" rel="noreferrer" key={`${icon}=${index}`}>
            <SubNav_SocialMediaOption>
              <img src={`${icon}.svg`} alt={`${icon}`} />
            </SubNav_SocialMediaOption>
          </a>
        ))}
      </SubNav_SocialMediaContainer>
    </SubNav_Container>
  );
};
export default SubNav;
