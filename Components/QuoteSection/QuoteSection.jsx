import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import useQuoteAPI from "../../Hooks/useQuoteAPI";
import { Text } from "../../styles/GlobalStyles";
import Loader from "../Loader/loader";
import { Quote, QuoteContainer } from "./QuoteSectionStyles";

const v = {
  a: { opacity: 1 },
  i: { opacity: 0 }
};

const QuoteSection = () => {
  const { data, isSuccess, isLoading, refetch } = useQuoteAPI();

  return (
    <QuoteContainer onClick={() => refetch()}>
      <Quote>
        {isLoading && <Loader />}
        {isSuccess && (
          <>
            <motion.div className="author" variants={v} initial="i" animate="a">
              ~ {data?.author} ~
            </motion.div>
            <motion.div className="quote" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              "{data?.content.split(".")}"
            </motion.div>
          </>
        )}
      </Quote>
    </QuoteContainer>
  );
};

export default QuoteSection;
