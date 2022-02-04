import { Section_Divider, Section_SubTitle, Section_Title } from "../../styles/GlobalStyles";
import {
  ToolBelt_Container,
  ToolBelt_Category,
  ToolBelt_SubContainer,
  ToolBelt_OptionsContainer,
  ToolBelt_CategoriesContainer
} from "./ToolBeltStyles";
import { Text } from "../../styles/GlobalStyles";
import { useEffect, useRef, useState } from "react";
import ToolBelt_Option from "./ToolBelt_Option/ToolBelt_Option";
import frontend from "/Data/Toolbelt/front-end.json";
import backend from "/Data/Toolbelt/back-end.json";
import design from "/Data/Toolbelt/utilities";
import { motion } from "framer-motion";

const v = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Toolbelt = () => {
  const { frontendTools } = frontend;
  const { backendTools } = backend;
  const { designTools } = design;
  const [toolkitOption, setToolkitOption] = useState({
    category: frontendTools,
    selected: "frontend"
  });
  return (
    <ToolBelt_Container>
      <Section_Title color="textFocused">toolbelt</Section_Title>
      <Section_SubTitle color="accent">an array of tools i have confidence in </Section_SubTitle>
      <Section_Divider />
      <ToolBelt_CategoriesContainer>
        <ToolBelt_Category
          h="50px"
          className={toolkitOption.selected === "frontend" && "selected"}
          onClick={() => setToolkitOption({ category: frontendTools, selected: "frontend" })}
        >
          <Text color="textFocused">Front-End</Text>
        </ToolBelt_Category>

        <ToolBelt_Category
          h="50px"
          className={toolkitOption.selected === "backend" && "selected"}
          onClick={() => setToolkitOption({ category: backendTools, selected: "backend" })}
        >
          <Text color="textFocused">Back-End</Text>
        </ToolBelt_Category>

        <ToolBelt_Category
          h="50px"
          className={toolkitOption.selected === "design" && "selected"}
          onClick={() => setToolkitOption({ category: designTools, selected: "design" })}
        >
          <Text color="textFocused">Design / Utilities</Text>
        </ToolBelt_Category>
      </ToolBelt_CategoriesContainer>
      {/* Options */}
      <ToolBelt_OptionsContainer>
        <motion.div variants={v} animate="show" initial="hidden">
          {toolkitOption.category.map((t, i) => (
            <ToolBelt_Option tool={t} key={`${t}-${i}`} />
          ))}
        </motion.div>
      </ToolBelt_OptionsContainer>
    </ToolBelt_Container>
  );
};

export default Toolbelt;
