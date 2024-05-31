import React from "react";
import Quotes from "./Quotes";
import quotes from "./quotes.json";

const QuoteList = () => {
  return (
    <div className="container mx-auto px-4 my-20">
      {quotes.map((item, index) => (
        <Quotes key={index} quote={item.quote} author={item.author} />
      ))}
    </div>
  );
};

export default QuoteList;
