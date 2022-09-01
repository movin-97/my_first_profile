import React from "react";
import {Row } from "react-bootstrap";
import RouterProvider from "./Routers/RouterProvider";
import HeaderComp from "./components/Header/HeaderComp";
import FooterComp from "./components/Footer/FooterComp";

const App = () => {
  return (
    <div className="w-100">
      <Row>
        <HeaderComp />
      </Row>
      <Row>
        <RouterProvider />
      </Row>
      <Row>
        <FooterComp />
      </Row>
    </div>
  );
};

export default App;
