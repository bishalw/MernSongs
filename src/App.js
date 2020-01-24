import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import SongsList from "./components/songs-list.component";
import EditSongs from "./components/edit-songs.component";
import CreateSongs from "./components/create-songs.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={SongsList} />
        <Route path="/edit/:id" exact component={EditSongs} />
        <Route path="/create" exact component={CreateSongs} />
        <Route path="/user" exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
