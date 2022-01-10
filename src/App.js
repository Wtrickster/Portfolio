import React from 'react';
import { BrowserRouter as HashRouter, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <HashRouter>
        <Header />
          <Main>
            <Redirect exact from="/" to="/About" />
            <Route exact path="/About" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Main>
        <Footer />
    </HashRouter>
  );
}

export default App;