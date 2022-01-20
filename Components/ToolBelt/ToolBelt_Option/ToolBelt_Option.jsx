import { motion } from "framer-motion";
import { Text } from "../../../styles/GlobalStyles";

import PercentageNumber from "./PercentageNumber/PercentageNumber";
import { ToolBelt_OptionConfidenceBar, ToolBelt_OptionContainer, ToolBelt_OptionImgContainer, ToolBelt_OptionRightSideContainer, ToolBelt_OptionTitle } from "./ToolBelt_OptionStyles";

const ToolBelt_Option = ({ tool }) => {
  return (
    <ToolBelt_OptionContainer>
      <ToolBelt_OptionImgContainer>
        <img src={`Toolbelt/${tool?.software.replace(/ /g, "-")}-logo.png`} alt="react-logo" />
      </ToolBelt_OptionImgContainer>
      {/* Title and Percentage bar */}
      <ToolBelt_OptionRightSideContainer>
        <ToolBelt_OptionTitle color="textFocused">{tool?.software}</ToolBelt_OptionTitle>

        <div className="confidenceBarPercentageCon">
          <ToolBelt_OptionConfidenceBar>
            <motion.div initial={{ width: "0" }} animate={{ width: `${tool?.confidence}%` }} transition={{ type: "spring", duration: 1.5 }} className="confidenceBarPercentage" />
          </ToolBelt_OptionConfidenceBar>
          <ToolBelt_OptionImgContainer>
            <PercentageNumber from={0} to={tool?.confidence} />
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
