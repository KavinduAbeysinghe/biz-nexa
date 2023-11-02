import React from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { MainLayout } from "./view/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

export default App;
