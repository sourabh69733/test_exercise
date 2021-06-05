import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { ProvideAuth } from "./components/use-auth.js";

import Navbar from "./components/navbar.component";

import ExerciseList from "./components/exercise-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import CreateTestExercise from "./components/create-test.component";
import {Login} from "./components/logingoogle";
import SideBarComponent from "./components/sidebar.component";

function App(props) {
  
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercise} />
        {/* <ProvideAuth> */}
        {/* {(CreateExercise, CreateUser, CreateTestExercise)} */}
        {/* </ProvideAuth> */}
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
        <Route path="/test-exercise" component={CreateTestExercise} />
        <Route path="/login" component={Login} />
        <Route
          path="/lessons"
          component={(SideBarComponent)}
        />
      </div>
    </Router>
  );
}

export default App;
