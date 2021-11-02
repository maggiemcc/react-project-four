import * as React from "react";
import { useBreakingBadContext } from "../contexts/BreakingBadContext";
import QuotesCard from "../components/QuotesCard";

const QuotesContainer = () => {
  const breakingBadData = useBreakingBadContext();

  return (
    <div>
      <h1>Quotes</h1>;
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {breakingBadData.quotes.map((quote) => {
          return (
            <QuotesCard
              key={quote.quote_id}
              quote={{ ...quote }}
              sx={{ margin: "auto" }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default QuotesContainer;
