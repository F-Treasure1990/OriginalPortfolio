import { motion } from "framer-motion";
import { Text } from "../../../styles/GlobalStyles";
import {
  ToolBelt_OptionConfidenceBar,
  ToolBelt_OptionContainer,
  ToolBelt_OptionImgContainer,
  ToolBelt_OptionPercentage,
  ToolBelt_OptionRightSideContainer,
  ToolBelt_OptionTitle
} from "./ToolBelt_OptionStyles";

const v = {
  hidden: { x: "-120%" },
  show: { x: 0, transition: { type: "spring", bounce: 0.2 } }
};
const ToolBelt_Option = ({ tool }) => {
  return (
    <ToolBelt_OptionContainer variants={v}>
      <ToolBelt_OptionImgContainer>
        <img src={`/ToolBelt/${tool?.software.replace(/ /g, "-")}-logo.png`} alt={tool?.software} />
      </ToolBelt_OptionImgContainer>
      {/* Title and Percentage bar */}
      <ToolBelt_OptionRightSideContainer>
        <ToolBelt_OptionTitle color="textFocused">{tool?.software}</ToolBelt_OptionTitle>

        <div className="confidenceBarPercentageCon">
          <ToolBelt_OptionConfidenceBar>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${tool?.confidence}%` }}
              transition={{ type: "tween", duration: 1 }}
              className="confidenceBarPercentage"
            />
          </ToolBelt_OptionConfidenceBar>
          <ToolBelt_OptionImgContainer>
            <ToolBelt_OptionPercentage initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {tool?.confidence}
            </ToolBelt_OptionPercentage>
          </ToolBelt_OptionImgContainer>
        </div>

        <Text color="text" className="description">
          {tool?.description}
        </Text>
      </ToolBelt_OptionRightSideContainer>
    </ToolBelt_OptionContainer>
  );
};

export default ToolBelt_Option;
