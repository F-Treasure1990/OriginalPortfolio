import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { changeAccentColor } from "../../Store/ThemeSlice";

const ColorPicker_Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: max-content;
  cursor: pointer;
  flex-basis: 228px;
  padding: 0 12px;
  margin-top: 16px;
  max-height: max-content;
  transition: margin ease 0.3s;
  ${({ theme }) => theme?.mediaQ.customDown(700)} {
    order: 3;
    width: 50%;
    flex-basis: max-content;
    margin-top: 48px;
  }
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    order: 3;
    width: 80%;
    flex-basis: max-content;
    margin-top: 36px;
  }
`;

const ColorPickerColor = styled(motion.div)`
  border-radius: 100%;
  height: 18px;
  width: 18px;
  /* margin: 0 16px; */
  background-color: ${({ color }) => color};
  overflow: hidden;
  transform-origin: center center;
`;

export const ColorPicker = () => {
  const colors = ["#50FA7B", "#FFB86C", "#BD93F9", "#FF79C6", "#5dddfa"];
  const [active, setActive] = useState("#BD93F9");
  const dispatch = useDispatch();
  return (
    <ColorPicker_Container>
      {colors.map((color, i) => (
        <ColorPickerColor
          key={`${color}-${i}`}
          color={color}
          onClick={() => {
            setActive(color);
            dispatch(changeAccentColor(color));
          }}
          animate={
            color === active
              ? {
                  opacity: 1,
                  outline: `3px solid ${color}`,
                  outlineOffset: "6px"
                }
              : {
                  outline: `0px solid ${color}`,
                  outlineOffset: "0px"
                }
          }
          initial={
            color === active && {
              outline: `3px solid ${color}`,
              outlineOffset: "6px"
            }
          }
          whileHover={{
            outline: `3px solid ${color}`,
            outlineOffset: "6px"
          }}
          transition={{ type: "spring" }}
        />
      ))}
    </ColorPicker_Container>
  );
};
