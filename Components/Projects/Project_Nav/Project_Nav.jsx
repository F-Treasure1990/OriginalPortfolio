import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "styled-components";
import Arrow from "../../../icons/Arrow";
import { CenterContainer, Dot, Label, LeftSideContainer, Project_NavContainer, RightSideContainer } from "./Project_NavStyles";
import { functionTester, toggleByAmount } from "../../../Store/ToggleSlice";

const Project_Nav = ({ filteredArray }) => {
  const dispatch = useDispatch();
  const { isActive } = useSelector(state => state.ToggleSlice);
  const { palette } = useTheme();

  return (
    <>
      <Project_NavContainer h="40px">
        <LeftSideContainer
          onClick={() => {
            dispatch(toggleByAmount(isActive <= 0 ? 0 : isActive - 1));
          }}
        >
          <Arrow d={8} c={palette?.accent} />
          <Label color={isActive === 0 ? "text" : "textFocused"}>back</Label>
        </LeftSideContainer>

        <CenterContainer>
          {filteredArray.map((c, i) => (
            <Dot active={isActive === i && "active"} key={`Dot-${i}`} />
          ))}
        </CenterContainer>

        <RightSideContainer
          onClick={() => {
            dispatch(toggleByAmount(isActive >= filteredArray.length - 1 ? filteredArray.length - 1 : isActive + 1));
          }}
        >
          <Label color={isActive === filteredArray.length - 1 ? "text" : "textFocused"}>next</Label>
          <Arrow d={8} c={palette?.accent} />
        </RightSideContainer>
      </Project_NavContainer>
    </>
  );
};

export default Project_Nav;
