import React from "react";
import './style.css';
import {Switch, Route} from 'react-router-dom';

import Navbar from "./Navbar";
import Home from "./Home";
import MainA from "./MainA";
// import MainB from "./MainB";
// import MainC from "./MainC";
// import Card from "./Card";
import Services from "./Services";
import Pics from "./Pics";
import Footer from "./Footer";

const App = () => {

  const styles = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridRowHeight: "200px",
    textAlign: "center",
  }
  return (
    <div>
      <Navbar/>
      <Main/>
      <div style={styles} className="cardHover">
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mainA" component={MainA} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/pics" component={Photos} />
      </Switch>
      </div>
      <Services/>
      <Pics/>
      <Footer/>
    </div>
  );
}

export default App;