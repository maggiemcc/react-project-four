import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const EpisodesCard = (props) => {
  const { episode } = props;
 
  return (
    <Card
      sx={{
        width: "100%",
        // maxWidth: "500px",
        // minWidth: "350px",
        height: "auto",
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
        //   height: "100%",
        }}
      >
        <h6 style={{fontWeight: "300", display: "left", textAlign: "left"}}>Season: {episode.season}</h6>
        <h6 style={{fontWeight: "300", display: "left", textAlign: "left"}}>Episode: {episode.episode_id}</h6>
        <h3 style={{ fontWeight: "bold", marginTop: "2%"}}>
          "{episode.title}"
        </h3>
        <h4 style={{fontWeight: "300", textAlign: "right"}}>Air Date: {episode.air_date}</h4>


      </CardContent>
    </Card>
  );
};

export default EpisodesCard;
