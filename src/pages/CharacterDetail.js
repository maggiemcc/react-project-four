import * as React from "react";
import { useParams } from "react-router-dom";
import { useBreakingBadContext } from "../contexts/BreakingBadContext";
import {
  Box,
} from "@mui/material";

let imageStyle = {
  width: "auto",
  overflow: "hidden",
  padding: 0,
  margin: "auto",
  border: "3px solid white",
  borderRadius: "5px",
  height: "100%",
  maxHeight: "250px",
  textAlign: "right",
};

const characterInfoStyle = {
  margin: 0,
  padding: "10px 0",
  display: "block",
  paddingRight: "0",
  width: "100%",
  fontSize: "14px",
};

const bull = (
  <Box
    component="span"
    style={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(0.8)",
    }}
  >
    •
  </Box>
);

const CharacterDetail = () => {
  const params = useParams();
  const characterData = useBreakingBadContext();
  // console.log(params);
  // console.log(characterData.characters)

  const character = characterData.characters.find((item) => {
    return item.char_id === Number(params.characterId);
  });
  console.log("Character--->", character);

  return (
    <div style={{ color: "white", padding: "3%", margin: "auto" }}>
      <h1>Character: {character.name}</h1>
      <div
        style={{
          width: "100%",
          textAlign: "left",
          margin: "auto",
          marginTop: "4%",
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gridColumnGap: "5px",
          maxWidth: "600px",
        }}
      >
        <div style={{ textAlign: "left", margin: "auto 0"}}>
          <img style={imageStyle} src={character.img} alt="characterpicture" />
        </div>

        <div style={{ margin: "auto" }}>
          <h3 style={{ textDecoration: "underline" }}>Chracter Information:</h3>
          <h4 style={characterInfoStyle}>
            {bull} <b>Born:</b> {character.birthday}
          </h4>
          <h4 style={characterInfoStyle}>
            {bull} <b>Nickname:</b> {character.nickname}
          </h4>
          <h4 style={characterInfoStyle}>
            {bull} <b>Portrayed By:</b> {character.portrayed}
          </h4>
          <h4 style={characterInfoStyle}>
            {bull} <b>Occupation:</b> {character.occupation[0]}, {character.occupation[1]}
          </h4>
          <h4 style={characterInfoStyle}>
            {bull} <b>Status:</b> {character.status}
          </h4>
        </div>
      </div>
    </div>
  );
};
export default CharacterDetail;
