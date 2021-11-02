import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import CardActions from "@mui/material/CardActions";
// import IconButton from "@mui/material/IconButton";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import InfoIcon from "@mui/icons-material/Info";

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
        <h6>Quote: {quote.quote_id}</h6>
        <Typography
          sx={{ fontWeight: "bold", marginTop: "2%" }}
          typography="h6"
        >
          "{quote.quote}"
        </Typography>
        <h4>- {quote.author}</h4>
      </CardContent>
    </Card>
  );
};

export default QuotesCard;
