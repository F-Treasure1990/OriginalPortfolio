import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleContactForm } from "../../Store/ToggleSlice";
import { ContactForm_Box, ContactForm_Container } from "./ContactFormStyles";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } }
};

const ContactForm = () => {
  const formShow = useSelector(state => state.ToggleSlice.isActive);
  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {formShow && (
        <ContactForm_Container
          onClick={() => dispatch(toggleContactForm())}
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <motion.div variants={item}>
            <ContactForm_Box w="500px" h="500px"></ContactForm_Box>
          </motion.div>
        </ContactForm_Container>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
