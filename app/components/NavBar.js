import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h5" fontWeight="bold">
            BOOK STORE
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
