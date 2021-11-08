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
              marginBottom: "5%",
              borderRadius: "10px",
              contain: "content",
              width: "100",
              "&:hover": {
                border: "none",
                backgroundColor: "darkgreen",
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
              marginBottom: "5%",
              borderRadius: "10px",
              contain: "content",
              width: "100",
              "&:hover": {
                border: "none",
                backgroundColor: "rgb(223, 182, 0)",
                color: "black",
              },
            }}
          >
          <img
            src={
              "https://i.pinimg.com/originals/70/df/18/70df18ff5cdddbe6250ac59de634b183.jpg"
            }
            alt="breaking bad quotes"
            style={{ width: "100%" }}
          />
          <h3 style={{ margin: "auto" }}>View Breaking Bad Quotes</h3>
          </Box>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
