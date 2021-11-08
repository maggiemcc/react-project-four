import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink, useHistory } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const ButtonAppBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const history = useHistory();
  const handleNavChoice = (chosen) => {
    history.push(`/${chosen}`);
    toggleDrawer();
  };

  const drawerItemList = () => (
    <Box
      sx={{
        width: 250,
        backgroundColor: "green",
        color: "white",
        height: "100%",
      }}
      role="presentation"
    >
      <List>
        <ListItem button onClick={() => handleNavChoice('welcome')}>
          <ListItemIcon>
            <HomeIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Welcome" />
        </ListItem>

        <ListItem button onClick={() => handleNavChoice('characters')}>
          <ListItemIcon>
            <GroupIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Characters" />
        </ListItem>
        
        <ListItem button onClick={() => handleNavChoice('deaths')}>
          <ListItemIcon>
            <LocalHospitalIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Character Deaths" />
        </ListItem>

        <ListItem button onClick={() => handleNavChoice('quotes')}>
          <ListItemIcon>
            <FormatQuoteIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Quotes" />
        </ListItem>

        <ListItem button onClick={() => handleNavChoice('episodes')}>
          <ListItemIcon>
            <LocalMoviesIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Episodes" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "white",
            color: "black",
            margin: "auto",
            textAlign: "left",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ mr: 2, justifyContent: "right", textAlign: "right" }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Breaking Bad App
            </Typography>

            <Button color="inherit">
              <NavLink
                to="/signup"
                style={{ textDecoration: "none", color: "black" }}
              >
                Signup
              </NavLink>
            </Button>

            <Button color="inherit">
              <NavLink
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                Login
              </NavLink>
            </Button>

          </Toolbar>
        </AppBar>
      </Box>

      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        {drawerItemList()}
      </Drawer>
    </>
  );
};

export default ButtonAppBar;
