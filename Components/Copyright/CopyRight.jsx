import React from "react";
import { CopyrightStyles, Text } from "../../styles/GlobalStyles";

const CopyRight = () => {
  return (
    <CopyrightStyles>
      <Text color="text">© 2020-present Fenton Treasure. All Rights Reserved.</Text>
      <div>
        <img src="instagram.png" />
        <img src="linkedin.png" />
        <img src="github.png" />
      </div>
    </CopyrightStyles>
  );
};

export default CopyRight;
