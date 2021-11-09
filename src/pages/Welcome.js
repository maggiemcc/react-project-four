import breakingBad from "../data/breakingBad.jpeg";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useIdentityContext } from "react-netlify-identity-gotrue";


const Welcome = () => {
  const identity = useIdentityContext();
  console.log(identity);

  return identity.provisionalUser ? (
    <h1>Please check your email to confirm your account.</h1>
  ) : (
    <div>
      <img
        src={breakingBad}
        alt="breaking bad"
        style={{
          width: "100%",
          borderTop: "2px solid white",
          borderBottom: "2px solid white",
          marginBottom: "10px",
        }}
      />
      <h1>Welcome {identity.user?.email}!</h1>

      <div style={{ padding: "5%" }}>
      <Link to="/episodes" style={{
              maxWidth: 800,
              textDecoration: "none",
        }} >
          <Box
            sx={{
              color: "white",
              textDecoration: "none",
              margin: "auto",
              padding: 0,
              textAlign: "center",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              border: "1px solid white",
              marginBottom: "25px",
              borderRadius: "10px",
              contain: "content",
              width: "100",
              "&:hover": {
                border: "none",
                backgroundColor: "rgb(223, 182, 0)",
                // backgroundColor: "rgb(255,215,0)",
                color: "black",
              },
            }}
          >
          <h3 style={{ margin: "auto" }}>View Breaking Bad Episode List</h3>

          <img
            src={
              "https://ntvb.tmsimg.com/assets/p8696131_b_h10_aa.jpg?w=960&h=540"
            }
            alt="breaking bad episodes"
            style={{ width: "100%" }}
          />
          </Box>
        </Link>

      <Link to="/quotes" style={{
              maxWidth: 800,
              textDecoration: "none",
        }} >
          <Box
            sx={{
              color: "white",
              textDecoration: "none",
              margin: "auto",
              padding: 0,
              textAlign: "center",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              border: "1px solid white",
              marginBottom: "25px",
              borderRadius: "10px",
              contain: "content",
              width: "100",
              "&:hover": {
                border: "none",
                // backgroundColor: "rgb(82, 12, 82)",
                backgroundColor: "rgb(148,0,211)",
                color: "white",
              },
            }}
          >
          <img
            src={
              "https://www.magicalquote.com/wp-content/uploads/2020/03/Today-is-the-first-day-of-the-rest-of-your-life.jpg"
            }
            alt="breaking bad quotes"
            style={{ width: "100%" }}
          />
          <h3 style={{ margin: "auto" }}>View Breaking Bad Quotes</h3>
          </Box>
        </Link>

        <Link to="/characters" style={{
              maxWidth: 800,
              textDecoration: "none"
        }} >
          <Box
            sx={{
              color: "white",
              textDecoration: "none",
              margin: "auto",
              padding: 0,
              textAlign: "center",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              border: "1px solid white",
              marginBottom: "25px",
              borderRadius: "10px",
              contain: "content",
              width: "100",
              "&:hover": {
                border: "none",
                backgroundColor: "green",
                color: "white",
              },
            }}
          >
            <h3 style={{ margin: "auto" }}>View Breaking Bad Characters</h3>
            <img
              src={
                "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/08/Better-Call-Saul-Every-Major-Breaking-Bad-Character-Still-Missing.jpg"
              }
              alt="breaking bad"
              style={{ width: "100%" }}
            />
          </Box>
        </Link>

        <Link to="/deaths" style={{
              maxWidth: 800,
              textDecoration: "none"
        }} >
          <Box
            sx={{
              color: "white",
              textDecoration: "none",
              margin: "auto",
              padding: 0,
              textAlign: "center",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              border: "1px solid white",
              marginBottom: "0px",
              borderRadius: "10px",
              contain: "content",
              width: "100",
              "&:hover": {
                border: "none",
                backgroundColor: "teal",
                // backgroundColor: "darkred",
                // backgroundColor: "rgb(65,105,225)",
                color: "white",
              },
            }}
          >
            <img
              src={
                "https://pbs.twimg.com/media/DrY1vatWwAASk9e.jpg:large"
              }
              alt="breaking bad"
              style={{ width: "100%" }}
            />
            <h3 style={{ margin: "auto" }}>View Breaking Bad Character Deaths</h3>

          </Box>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
