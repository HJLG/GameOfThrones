import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { Route, Link, Switch } from "react-router-dom";
import HouseStark from "./components/HouseStark";
import HouseLannister from "./components/HouseLannister";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home Page</Link>
        <br/>
        <Link to="/housestark">House Stark</Link><br/>
        <Link to="/houselannister">House Lannister</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/housestark">
            <HouseStark />
          </Route>
          <Route path="/houselannister">
            <HouseLannister />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
