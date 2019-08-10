//import structural modules
import React from "react";
import { withRouter } from "react-router-dom";

//import css
import "./App.css";

//import components
import Footer from "./Navigation/Footer";
import Header from "./Navigation/Header";

function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

const AppRouter = withRouter(App);

export default AppRouter;
