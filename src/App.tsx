import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoute from "Routes";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  );
}

export default App;
