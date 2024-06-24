import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter } from "react-router-dom";
// import RouterUtils from "./provider/RouterUtils.tsx";
import { StaticRouter } from "react-router-dom/server";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/*<StaticRouter location={"/"}>*/}
      {/*<RouterUtils>*/}
      <App />
      {/*</RouterUtils>*/}
      {/*</StaticRouter>*/}
    </BrowserRouter>
  </React.StrictMode>,
);
