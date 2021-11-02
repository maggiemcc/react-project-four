// import * as React from "react";
// import { useParams } from "react-router-dom";
// import { useBreakingBadContext } from "../contexts/BreakingBadContext";
// import {
//     Box,
//     // Typography,
// } from "@mui/material";

// let imageStyle = {
//     width: "100%",
//     overflow: "hidden",
//     padding: 0,
//     margin: 0,
//     border: "3px solid white",
//     borderRadius: "5px",
//     maxWidth: "300px",
//   };

// const characterInfoStyle = {
//     margin: 0,
//     padding: "10px 0",
//     display: "block",
//     paddingRight: "2.5%",
//     width: "100%",
//     fontSize: "14px",
//   };

// const bull = (
//     <Box
//       component="span"
//       style={{
//         display: "inline-block",
//         mx: "2px",
//         transform: "scale(0.8)",
//       }}
//     >
//       •
//     </Box>
//   );

// const CharacterDetail = () => {
//   const params = useParams();
//   const characterData = useBreakingBadContext();

//   const characterInfo = characterData.characters.find((item) => {
//     return item.char_id == params.characterId;
//   });
// //   console.log("selected Character--->", characterInfo);

//   return (
//       <div style={{color: "white", padding: "3%",}}>
//             <h2>Full Name: {characterInfo.name}</h2>
//             <div style={{width: "100%", textAlign: "left", margin: "auto", display: "grid", gridTemplateColumns: "50% 50%"}}>
//                 <div>
//                     <h4 style={characterInfoStyle}>
//                       {bull} <b>Born:</b> {characterInfo.birthday}
//                     </h4>
//                     <h4 style={characterInfoStyle}>
//                       {bull} <b>Nickname:</b> {characterInfo.nickname}
//                     </h4>
//                     <h4 style={characterInfoStyle}>
//                       {bull} <b>Portrayed By:</b> {characterInfo.portrayed}
//                     </h4>
//                     <h4 style={characterInfoStyle}>
//                       {bull} <b>Occupation:</b> {characterInfo.occupation[0]},{" "}
//                       {characterInfo.occupation[1]}
//                     </h4>
//                     <h4 style={characterInfoStyle}>
//                       {bull} <b>Status:</b> {characterInfo.status}
//                     </h4>
//                   </div>
//                   <div style={{margin: "auto", padding: "1%"}}>
//                   <img style={imageStyle} src={characterInfo.img} alt="characterpicture" />
//                   </div>
//                   </div>

//       </div>
//     );
// };
// export default CharacterDetail;
