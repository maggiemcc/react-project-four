import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import LoginForm from "../login/LoginForm";
// import Modal from "@mui/material/Modal";
import {NavLink} from 'react-router-dom';

const ButtonAppBar = () => {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

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
              sx={{ mr: 2, justifyContent: "right", textAlign: "right" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Breaking Bad App
            </Typography>

            <Button
              color="inherit"
              // onClick={handleOpen}
            >
              <NavLink to="/login">Login</NavLink>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      {/* <div>
        <Modal open={open}>
          <LoginForm closeHandler={handleClose} />
        </Modal>
      </div> */}
    </>
  );
};

export default ButtonAppBar;
