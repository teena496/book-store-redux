"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./components/App";

const Home = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Home;
