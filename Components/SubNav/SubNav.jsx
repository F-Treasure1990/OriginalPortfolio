import { ColorPicker } from "../ColorPicker/ColorPicker";
import { AvatarImg } from "../InfoSection/TopSection/AvatarDP/AvatarDPStyles";
import { MediaOption } from "../InfoSection/TopSection/SocialMediaIcons/SocailMediaIconsStyles";
import {
  SubNav_ColorPickerContainer,
  SubNav_Container,
  SubNav_DP,
  SubNav_DPContainer,
  SubNav_SocialMediaContainer,
  SubNav_SocialMediaOption
} from "./SubNavStyles";

const SubNav = () => {
  const MediaOptions = ["instagram", "linkedin", "github"];
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
          <SubNav_SocialMediaOption key={`${icon}=${index}`}>
            <img src={`${icon}.png`} alt={`${icon}`} />
          </SubNav_SocialMediaOption>
        ))}
      </SubNav_SocialMediaContainer>
    </SubNav_Container>
  );
};
export default SubNav;
