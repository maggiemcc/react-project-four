import * as React from "react";
// import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
// import CardContent from "@mui/material/CardContent";
// import "../components/EpisodesCard.css";

const EpisodesCard = (props) => {
  const { episode } = props;
  return (
    <Box
      sx={{
        width: "100%",
        padding: 0,
        height: "auto",
        margin: "10px 2%",
        borderRadius: "0",
        backgroundColor: "white",
        fontWeight: "300",
        "&:hover": {
          backgroundColor: "green",
          color: "white",
        },
      }}
    >
      <Box
        sx={{
          padding: "2%",
        //   padding: "0",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
            paddingBottom: "0",
            padding: 0,
            textAlign: "left",
            margin: "auto"
          }}
        >
          <div style={{ margin: "auto 2%"}}>
            <h6 style={{ fontWeight: "bold", display: "inline", margin: "0" }}>
              Title:{" "}
            </h6>
            <h6 style={{ fontWeight: "300", display: "inline", margin: "0" }}>
              {episode.title}
            </h6>
          </div>
          <div style={{ margin: "auto 2%"}}>
            <h6 style={{ fontWeight: "bold", display: "inline", margin: "0" }}>
              Episode:{" "}
            </h6>
            <h6 style={{ fontWeight: "300", display: "inline", margin: "0" }}>
              {episode.episode_id}
            </h6>
          </div>
          <div style={{ margin: "auto 2%" }}>
            <h6 style={{ fontWeight: "bold", display: "inline", margin: "0" }}>
              Season:{" "}
            </h6>
            <h6 style={{ fontWeight: "300", display: "inline", margin: "0" }}>
              {episode.season}
            </h6>
          </div>
 
          <div style={{ margin: "auto 2%" }}>
            <h6 style={{ fontWeight: "bold", display: "inline", margin: "0" }}>
              Air Date:{" "}
            </h6>
            <h6 style={{ fontWeight: "300", display: "inline", margin: "0" }}>
              {episode.air_date}
            </h6>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default EpisodesCard;
