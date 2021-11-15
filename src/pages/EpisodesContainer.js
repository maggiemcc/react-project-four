import * as React from "react";
import { useBreakingBadContext } from "../contexts/BreakingBadContext";
import EpisodesCard from "../components/EpisodesCard";
import { useIdentityContext } from "react-netlify-identity-gotrue";


const EpisodesContainer = () => {
  const breakingBadData = useBreakingBadContext();
  const identity = useIdentityContext();

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

        {!identity.provisionalUser && !identity.user && (
          <h3 style={{ color: "white" }}>Please signup or login first.</h3>
        )};

        {identity.user && (
          <div style={{margin: 0}}>
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

        )}
      </div>
    </div>
  );
};

export default EpisodesContainer;
