import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { changeAccentColor } from "../../Store/ThemeSlice";

export const ColorPicker_Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: max-content;
  cursor: pointer;
  flex-basis: 228px;
  padding: 0 12px;
  margin-top: ${({ infoSec }) => (infoSec ? "16px" : "0px")};
  max-height: max-content;
  transition: margin ease 0.3s;
  ${({ infoSec }) =>
    infoSec &&
    css`
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
    `}
`;

export const ColorPickerColor = styled(motion.div)`
  border-radius: 100%;
  ${({ infoSec }) =>
    infoSec
      ? css`
          height: 20px;
          width: 20px;
        `
      : css`
          height: 15px;
          width: 15px;
        `}
  /* margin: 0 16px; */
  background-color: ${({ color }) => color};
  overflow: hidden;
  transform-origin: center center;
`;

export const ColorPicker = ({ infoSec }) => {
  const accentColor = useSelector(state => state.ThemeSlice.theme.palette.accent);
  const colors = ["#50FA7B", "#FFB86C", "#BD93F9", "#FF79C6", "#5dddfa"];
  const dispatch = useDispatch();
  return (
    <ColorPicker_Container infoSec={infoSec}>
      {colors.map((color, i) => (
        <ColorPickerColor
          key={`${color}-${i}`}
          color={color}
          onClick={() => {
            dispatch(changeAccentColor(color));
          }}
          animate={
            color === accentColor
              ? {
                  opacity: 1,
                  outline: `2px solid ${color}`,
                  outlineOffset: "6px"
                }
              : {
                  outline: `0px solid ${color}`,
                  outlineOffset: "0px"
                }
          }
          initial={
            color === accentColor && {
              outline: `2px solid ${color}`,
              outlineOffset: "6px"
            }
          }
          whileHover={{
            outline: `2px solid ${color}`,
            outlineOffset: "6px"
          }}
          transition={{ type: "tween" }}
        />
      ))}
    </ColorPicker_Container>
  );
};
