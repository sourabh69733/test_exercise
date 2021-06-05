import React from "react";

export function Login() {
  return (
    <div className="row">
      <div className="col-md-3">
        <a
          className="btn btn-outline-dark"
          //   style="margin: bottom 100px; margin-right:10px;"
          href="http://localhost:5000/users/login/google"
          role="button"
          //   style="text-transform:none"
        >
          Login with Google
        </a>
      </div>
    </div>
  );
}

export function Logout() {
  return (
    <div className="row">
      <div className="col-md-3">
        <a
          className="btn btn-outline-dark"
          //   style="margin: bottom 100px; margin-right:10px;"
          href="http://localhost:5000/users/logout"
          role="button"
          //   style="text-transform:none"
        >
          Logout
        </a>
      </div>
    </div>
  );
}
