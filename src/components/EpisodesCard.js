import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import "./EpisodeCard.css";

const EpisodesCard = (props) => {
  const { episode } = props;
  console.log(episode);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          padding: 0,
          height: "auto",
          margin: "5px 2%",
          borderRadius: "4px",
          backgroundColor: "white",
        }}
      >
        <Card
          sx={{
            padding: "2% 1%",
            display: "block",
            textAlign: "left",
            "&:hover": {
              backgroundColor: "green",
              color: "white",
            },
          }}
        >
          <div>
          <div style={{ margin: 0, marginBottom: "2%"}}>
              <h4 style={{margin: 0}}><span>Episode Title: </span> {episode.title}</h4>
            </div>

          <div style={{ margin: "0", display: "flex", flexWrap: "wrap", gap: "12px"}}>
              <h6><span>Season: </span> {episode.season}</h6>
              <h6><span>Ep: </span> {episode.episode_id}</h6>
              <h6><span>Air Date: </span> {episode.air_date}</h6>
            </div>
          </div>

          <div>
            <div style={{ display: "inline-block", marginTop: "2%" }}>
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
                        display: "inline-block",

                      }}
                    >
                      {(index ? ", " : "") + character}
                    </h6>
                  );
                })}
              </div>
            </div>
          </div>
        </Card>
      </Box>
    </>
  );
};

export default EpisodesCard;
