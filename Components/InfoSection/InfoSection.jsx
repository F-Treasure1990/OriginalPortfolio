import { MsgButton } from "./TopSection/MsgButton/MsgButton";
import { Text } from "/styles/GlobalStyles";
import AvatarDP from "./TopSection/AvatarDP/AvatarDP";
import { BottomSectionContainer, Container, EmptyContainer, MiddleSectionContainer, TopSectionContainer } from "./InfoSectionStyles";
import SocialMediaIcons from "./TopSection/SocialMediaIcons/SocialMediaIcons";
import Credentials from "./MiddleSection/Credientials/Credentials";
import AboutMe from "./BottomSection/AboutMe";

const InfoSection = () => {
  return (
    <Container width="100%" percent>
      <MsgButton solid>
        <Text color="secondary">message</Text>
      </MsgButton>
      {/* TOP SECTION */}
      <TopSectionContainer>
        {/* Empty container to keep avatar centered within infobox */}
        <EmptyContainer />
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
