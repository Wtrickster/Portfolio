import React from 'react';
import { BrowserRouter as HashRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <HashRouter>
      <Header />
      <Main>
        <Route exact path={["/" , "/React_Portfolio/"]} component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Main>
      <Footer />
    </HashRouter>
  );
}

export default App;