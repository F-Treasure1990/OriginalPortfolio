import React from "react";
import useQuoteAPI from "../../Hooks/useQuoteAPI";
import { Text } from "../../styles/GlobalStyles";
import Loader from "../Loader/loader";
import { Quote, QuoteContainer } from "./QuoteSectionStyles";

const QuoteSection = () => {
  const { data, isSuccess, isLoading } = useQuoteAPI();
  console.log(isLoading);
  return (
    <QuoteContainer>
      <Quote>
        {isLoading && <Loader />}
        {isSuccess && (
          <>
            <Text className="author" color="text">
              ~ {data?.author} ~
            </Text>
            <Text className="quote" color="textFocused">
              "{data?.content.split(".")}"
            </Text>
          </>
        )}
      </Quote>
    </QuoteContainer>
  );
};

export default QuoteSection;
