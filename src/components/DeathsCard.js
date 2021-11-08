import * as React from "react";
// import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
// import CardContent from "@mui/material/CardContent";
// import "../components/EpisodesCard.css";

const DeathsCard = (props) => {
  const { episode } = props;
  console.log(episode)
  return (
    <Box
      sx={{
        padding: "2%",
        height: "auto",
        margin: "10px 2%",
        borderRadius: "0",
        backgroundColor: "white",
        fontWeight: "300",
        "&:hover": {
          backgroundColor: "green",
          color: "white",
          borderRadius: "5px"
        },

        width: "100%",
        maxWidth: "500px",
        minWidth: "250px",
      }}
    >
      <Box
        sx={{
        justifyContent: "center",
        height: "100%",
 
        }}
      >
        <Box
          sx={{
            paddingBottom: "0",
            padding: 0,
            textAlign: "left",
            margin: "auto",
            height: "100%",
          }}
        >
        <div style={{ margin: "auto 2%"}}>
            <h6 style={{ fontWeight: "bold", display: "inline", margin: "0" }}>In Episode:{" "}</h6>
            <h6 style={{ fontWeight: "300", display: "inline", margin: "0" }}>{episode.episode}</h6>
          </div>
          <div style={{ margin: "auto 2%"}}>
            <h6 style={{ fontWeight: "bold", display: "inline", margin: "0" }}>Death:{" "}</h6>
            <h6 style={{ fontWeight: "300", display: "inline", margin: "0" }}>{episode.death}</h6>
          </div>
          <div style={{ margin: "auto 2%"}}>
            <h6 style={{ fontWeight: "bold", display: "inline", margin: "0" }}>Cause:{" "}</h6>
            <h6 style={{ fontWeight: "300", display: "inline", margin: "0" }}>{episode.cause}</h6>
          </div>
          <div style={{ margin: "auto 2%" }}>
            <h6 style={{ fontWeight: "bold", display: "inline", margin: "0" }}>Responsible:{" "}</h6>
            <h6 style={{ fontWeight: "300", display: "inline", margin: "0" }}>{episode.responsible}</h6>
          </div>

          <div style={{ margin: "auto 2%" }}>
            <h6 style={{ fontWeight: "bold", display: "inline", margin: "0" }}>Last Words:{" "}</h6>
            <h6 style={{ fontWeight: "300", display: "inline", margin: "0" }}>{episode.last_words}</h6>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default DeathsCard;
