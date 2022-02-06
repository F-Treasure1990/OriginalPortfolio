import { ColorPicker } from "../ColorPicker/ColorPicker";
import AvatarDP from "./TopSection/AvatarDP/AvatarDP";
import {
  BottomSectionContainer,
  Container,
  EmptyContainer,
  MiddleSectionContainer,
  TopSectionContainer
} from "./InfoSectionStyles";
import SocialMediaIcons from "./TopSection/SocialMediaIcons/SocialMediaIcons";
import Credentials from "./MiddleSection/Credentials/Credentials";
import AboutMe from "./BottomSection/AboutMe";

const InfoSection = () => {
  return (
    <Container>
      {/* TOP SECTION */}
      <TopSectionContainer>
        <ColorPicker infosec={"true"} />
        <AvatarDP />
        <SocialMediaIcons />
      </TopSectionContainer>

      {/* MIDDLE SECTION */}
      <MiddleSectionContainer>
        <Credentials />
      </MiddleSectionContainer>

      {/*  BOTTOM SECTION */}
      <BottomSectionContainer>
        <AboutMe />
      </BottomSectionContainer>
    </Container>
  );
};

export default InfoSection;
