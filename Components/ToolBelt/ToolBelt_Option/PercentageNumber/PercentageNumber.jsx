import { animate } from "framer-motion";
import { useRef, useEffect } from "react";
import styled, { useTheme } from "styled-components";

const PercentageNumber = ({ from, to }) => {
  const { palette } = useTheme();
  const nodeRef = useRef();
  useEffect(() => {
    const controls = animate(from, to, {
      duration: 1,
      ease: "easeOut",
      onUpdate(value) {
        nodeRef.current.textContent = `${value.toFixed(0)}`;
      }
    });
    return () => controls.stop();
  }, [to]);

  return <div ref={nodeRef} style={{ color: palette?.accent }}></div>;
};

export default PercentageNumber;
