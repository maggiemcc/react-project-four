import * as React from "react";
import { useBreakingBadContext } from "../contexts/BreakingBadContext";
import EpisodesCard from "../components/EpisodesCard";

const EpisodesContainer = () => {
  const breakingBadData = useBreakingBadContext();

  return (
    <div>
      <h1>Episodes</h1>;
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >

        
        {breakingBadData.episodes.map((episode) => {
          return (
            <EpisodesCard
              key={episode.episode_id}
              episode={{ ...episode }}
              sx={{ margin: "auto" }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EpisodesContainer;
