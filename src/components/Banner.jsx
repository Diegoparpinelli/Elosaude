import React from "react";
import { Link } from "react-router-dom";

function Banner(props) {
  return (
    <div className="sigma_subheader style-5 bg-gray">
      <div className="container">
        <div className="sigma_subheader-inner">
          <h1>{props.title}</h1>
        </div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">{props.toLink}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {props.actualLink}
          </li>
        </ol>
      </div>

      <img src={props.image} className="br" alt="subheader" />
    </div>
  );
}

export default Banner;
