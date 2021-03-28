import React from "react";
import { Router } from "@reach/router";

import { BalloonsPage } from "./pages/balloons-page/index";
import { BalloonDetailsPage } from "./pages/ballon-details-page/index";
import { CartPage } from "./pages/cart-page";

import "./styles/global.scss";

function App() {
  return (
    <Router>
      <BalloonsPage path="/" />
      <BalloonDetailsPage path="balloons/:id" />
      <CartPage path="cart"></CartPage>
    </Router>
  );
}

export default App;
