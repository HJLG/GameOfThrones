import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { Route, Switch } from "react-router-dom";
import HouseStark from "./components/HouseStark";
import HouseLannister from "./components/HouseLannister";
import Information from "./components/Information";
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";
function App() {
  // const handleClick = (person) => {
  //   setPerson(person)
  // }
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
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
      <main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/housestark">
            <HouseStark />
          </Route>
          <Route exact path="/houselannister">
            <HouseLannister />
          </Route>
          <Route exact path="/:id">
            <Information />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
