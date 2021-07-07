import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { Route, Switch } from "react-router-dom";
import HouseStark from "./components/HouseStark";
import HouseLannister from "./components/HouseLannister";
import HouseBaratheon from "./components/HouseBaratheon";
import HouseTargaryen from "./components/HouseTargaryen";
import Information from "./components/Information";
import Books from "./components/Books"
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <ReactBootStrap.Navbar.Brand href="/">
          Home Page
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="/housestark">
              House Stark
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/houselannister">
              House Lannister
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/housebaratheon">
              House Baratheon
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/housetargaryen">
              House Targaryen
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
      <main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/housestark">
            <HouseStark className="housestark" />
          </Route>
          <Route exact path="/houselannister">
            <HouseLannister className="houselannister" />
          </Route>
          <Route exact path="/housebaratheon">
            <HouseBaratheon className="housebaratheon" />
          </Route>
          <Route exact path="/housetargaryen">
            <HouseTargaryen className="housetargaryen" />
          </Route>
          <Route exact path="/:id">
            <Information className="information" />
          </Route>
          <Route exact path="/books/:books">
            <Books/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
