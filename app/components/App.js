import React from "react";
import BookList from "./BookList";
import NavBar from "./NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: "monospace",
  },
  palette: {
    primary: {
      main: purple[900],
    },
    secondary: {
      main: "#be9ae2",
    },
  },
});

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar></NavBar>
        <BookList />
      </ThemeProvider>
    </>
  );
}
