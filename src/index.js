import React from "react";
import ReactDOM from "react-dom/client";
import MyRouter from "./Components/Rooter";
import "./Styles/global.css";
import "./Styles/fontawesome.css";
import "./Styles/brands.css";
import "./Styles/regular.css";
import "./Styles/solid.css";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider  theme={{ token: { colorPrimary: "#ff55a5"}}}>
    <MyRouter />
  </ConfigProvider>
);
