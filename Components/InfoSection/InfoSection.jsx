import { Text } from "/styles/GlobalStyles";
import AvatarDP from "./AvatarDP/AvatarDP";
import { Container, MsgButton, EmptyContainer, TopSectionContainer } from "./InfoSectionStyles";
import { useState } from "react";
import SocialMediaIcons from "./SocialMediaIcons/SocialMediaIcons";

const InfoSection = () => {
  return (
    <Container h="574" width="100" percent>
      <MsgButton solid>
        <Text color="secondary">message</Text>
      </MsgButton>
      <TopSectionContainer>
        {/* Empty container to keep avatar centered within infobox */}
        <EmptyContainer />
        <AvatarDP />
        <SocialMediaIcons />
      </TopSectionContainer>
    </Container>
  );
};

export default InfoSection;
