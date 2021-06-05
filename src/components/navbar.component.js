import React from "react";
import { Link } from "react-router-dom";
// import { useAuth } from "./use-auth.js";

export default function Navbar(props) {
  // const auth = useAuth();
  console.log(props.request, props);
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div class="container-fluid">
        <Link to="/" className="navbar-brand">
          ExerciseTracker
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container-fluid" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Exercises
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                CreateExercise Log
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Create User
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/test-exercise" className="nav-link">
                Create Test Exercises
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/lessons" className="nav-link">
                Lessons
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
