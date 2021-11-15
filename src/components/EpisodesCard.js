import * as React from "react";
import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
import "./EpisodeCard.css";

const EpisodesCard = (props) => {
  const { episode } = props;
  console.log(episode);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: "350px",
          padding: "20px",
          height: "auto",
          // height: "100%",
          margin: "2% 2%",
          borderRadius: "4px",
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "green",
            color: "white",
          },
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            // padding: "3%",
            display: "block",
            textAlign: "left",
          }}
        >
          <div style={{ display: "block" }}>
            <div style={{ margin: "0 0 25px 0" }}>
              <h4 style={{ margin: 0, fontWeight: "300" }}>
                <span>Episode Title: </span> {episode.title}
              </h4>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", }}>
            <h6>
                <span>Series: </span> {episode.series}
              </h6>
            <h6>
                <span>Season: </span> {episode.season}
              </h6>
              <h6>
                <span>Episode: </span> {episode.episode_id}
              </h6>
              <h6>
                <span>Air Date: </span> {episode.air_date}
              </h6>

              <div style={{ display: "inline-block" }}>
                <h6 style={{ display: "inline" }}>
                  <span>Character Appearances:</span>
                </h6>
                <div
                  style={{
                    textAlign: "left",
                  }}
                >
                  {episode.characters.map((character, index) => {
                    return (
                      <h6
                        key={character}
                        style={{
                          lineHeight: "normal",
                          // display: "inline-block",
                          display: "block",
                          paddingTop: "5px",
                          paddingLeft: "15px",
                        }}
                      >
                        {/* {(index ? ", " : "") + character} */}
                        {character}
                      </h6>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default EpisodesCard;
