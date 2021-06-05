import React from 'react';
import logo from "../logic-image.png";


export default function FirstExcercisePage(props) {
    return (
      <div>

        <div className="card" style={{ width: "18rem;" }}>
          <img src={logo} className="card-img-top" alt="hi" style={{"width":"10px","height":"10px","background":"white","border":"none"}} />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
}