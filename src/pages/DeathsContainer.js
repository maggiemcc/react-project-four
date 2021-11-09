import * as React from "react";
import { useBreakingBadContext } from "../contexts/BreakingBadContext";
import DeathsCard from "../components/DeathsCard";

const DeathsContainer = () => {
  const breakingBadData = useBreakingBadContext();

  return (
    <div>
      <h1>Character Deaths</h1>;
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >

        
        {breakingBadData.deaths.map((death) => {
          return (
            <DeathsCard
              key={death.death_id}
              death={{ ...death }}
              sx={{ margin: "auto"}}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DeathsContainer;
