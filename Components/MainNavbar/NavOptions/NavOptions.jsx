import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

import { useState } from "react";
import {
  NavOptionContainer,
  NavOptionsContainer,
  NavOptionAnimation,
  NavOption
} from "./NavOptionsStyles";
import { Text } from "/styles/GlobalStyles";

const NavOptions = () => {
  const router = useRouter();
  const NavOptions = ["home", "projects", "toolbelt", "blog", "resources"];
  const [clicked, setClicked] = useState(
    router.route === "/" ? "home" : router.pathname.replace(/[^a-zA-Z ]/g, "")
  );

  //Framer variants
  const varants = {
    initial: { transform: "translate3d(-110%,0px,0px)" },
    active: {
      transform: "translate3d(0%,0px,0px)",
      transition: { type: "spring", damping: 8, mass: 0.8 }
    },
    exit: { transform: "translate3d(-110%,0px,0px)" }
  };

  return (
    <NavOptionsContainer>
      {NavOptions.map((option, index) => (
        <Link href={option === "home" ? "/" : `/${option}`} key={`${option}-${index}`} passHref>
          <NavOptionContainer
            key={`${option}-${index}`}
            onClick={() => setClicked(option)}
            clicked={clicked === option}
          >
            <NavOption>
              <img
                className="navOption_icon"
                src={`${option}.svg`}
                alt={`${option} image`}
                data-hover="boom"
              />
              <Text
                className="navOptionText"
                color={clicked === option ? "textFocused" : "text"}
                font="subtitle1"
              >
                {option}
              </Text>
              <AnimatePresence>
                {clicked === option && (
                  <NavOptionAnimation>
                    <motion.div
                      className="animation"
                      variants={varants}
                      animate={clicked === option && "active"}
                      initial="initial"
                      exit="exit"
                    />
                  </NavOptionAnimation>
                )}
              </AnimatePresence>
            </NavOption>
          </NavOptionContainer>
        </Link>
      ))}
    </NavOptionsContainer>
  );
};

export default NavOptions;
