import React from "react";

import blogStandart from '../../src/assets/img/blog-standard/80x80.jpg'

function MostComments() {

  return (
    <div className="sigma_recent-post">
      <a className="recent-post-image">
        <img src={blogStandart} alt="img" />
        <span>12</span>
      </a>
      <div className="recent-post-descr">
        <h6>
          <a>Every Next Level Of Your Life Will Demand</a>
        </h6>
        <a className="date">
          <i className="far fa-clock me-2"></i>
          June 4, 2022
        </a>
      </div>
    </div>
  );
}

export default MostComments;
