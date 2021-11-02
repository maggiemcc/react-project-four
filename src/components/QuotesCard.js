import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const QuotesCard = (props) => {
  const { quote } = props;
 
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "500px",
        minWidth: "350px",
        m: 2,
        backgroundColor: "white",
        fontWeight: "300",
        "&:hover": {
            backgroundColor: "green",
          color: "white",
        }
      }}
    >
      <CardContent
        sx={{
          padding: "4%",
          height: "100%",
        }}
      >
        <h6 style={{fontWeight: "300", display: "left", textAlign: "left"}}>#{quote.quote_id}</h6>
        <h3 style={{ fontWeight: "bold", marginTop: "2%"}}>
          "{quote.quote}"
        </h3>
        <h4 style={{fontWeight: "300", textAlign: "right"}}>- {quote.author}</h4>


      </CardContent>
    </Card>
  );
};

export default QuotesCard;
