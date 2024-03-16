import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <NavBar></NavBar>
          <div className="container">
            <Routes>
              <Route path="/" element={<BookList />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
}
