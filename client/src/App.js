import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Header />
          <switch>
            <Route exact path="/" component={Search}/>
            <Route path="/saved" component={Saved}/>
          </switch>
        </div>
      </Router>
    )
  }
}

export default App;
