import React, { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { Route, Link, Switch } from "react-router-dom";
import HouseStark from "./components/HouseStark";
import HouseLannister from "./components/HouseLannister";
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";
function App() {
  const [person, setPerson] = useState(null);

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
            \
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
            {/* <HouseStark handler = {handleClick} person = {person}/> */}
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
