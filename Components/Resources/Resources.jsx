import React from "react";

import { Section_Divider, Section_SubTitle, Section_Title } from "../../styles/GlobalStyles";
import { Resources_Container } from "./ResourcesStyles";
import Resource_Option from "./Resource_Option/Resource_Option";
import ResourceData from "/Data/Resources/Resources.json";

const Resources = () => {
  return (
    <Resources_Container>
      <Section_Title color="textFocused">Resources</Section_Title>
      <Section_SubTitle color="accent">useful resources i have used over time</Section_SubTitle>
      <Section_Divider />
      {ResourceData.categories.map(category => (
        <Resource_Option category={category} />
      ))}
    </Resources_Container>
  );
};

export default Resources;
