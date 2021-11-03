import React from "react";
import "./App.css";
import CharacterContainer from "./pages/CharacterContainer";
import Box from "@mui/material/Box";
import { BreakingBadContextProvider } from "./contexts/BreakingBadContext";
import ButtonAppBar from "./components/nav/ButtonAppBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import QuotesContainer from "./pages/QuotesContainer";
import LoginForm from "./components/login/LoginForm";
import NotFound from "./pages/NotFound";
import CharacterDetail from "./pages/CharacterDetail";
import NetlifyIdentityContext from "react-netlify-identity-gotrue";
import SignupForm from "./components/login/SignupForm"

const App = () => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <div className="App">
      <NetlifyIdentityContext url="https://react-app-four.netlify.app">
        <div style={{ maxWidth: 1200, margin: "auto" }}>
          <div
            style={{
              border: "2px solid white",
              padding: "0 0 2% 0",
              background: "black",
              minHeight: "600px",
            }}
          >
            <BreakingBadContextProvider>
              <ButtonAppBar />

              <Switch>
                <Route path="/" exact>
                  <Redirect to="/signup" />
                </Route>

                <Route path="/welcome" exact>
                  <Welcome />
                </Route>

                <Route path="/characters" exact>
                  <CharacterContainer sx={{ m: "auto", width: "auto" }} />
                </Route>

                <Route path="/characters/:characterId" exact>
                  <CharacterDetail />
                </Route>

                <Route path="/quotes">
                  <QuotesContainer />
                </Route>

                <Route path="/login">
                  <LoginForm />
                </Route>

                <Route path="/signup">
                  <SignupForm />
                </Route>

                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </BreakingBadContextProvider>
          </div>

          <div>
            <h5 style={{ color: "white", margin: 0, padding: "4%" }}>
              DGM3790 {bull} © Maggie McCausland {bull} 2021
            </h5>
          </div>
        </div>
      </NetlifyIdentityContext>
    </div>
  );
};

export default App;
