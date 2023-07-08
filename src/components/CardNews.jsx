import React from "react";
import { Link } from "react-router-dom";

import imageHome350 from "/src/assets/img/home-1/350x300.jpg"

function CardNews() {

  return (
    <div className="col-lg-4 col-md-6">
      <article className="sigma_post style-15">
        <div className="sigma_post-thumb">
          <a>
            <img src={imageHome350} alt="img" />
          </a>
        </div>
        <div className="sigma_post-body">
          <div className="sigma_post-content">
            <div className="sigma_post-meta is-absolute">
              <a className="sigma_post-date">28 January, 2022</a>
            </div>
            <div className="sigma_post-meta">
              <ul>
                <li>
                  <a>
                    <i className="fal fa-user"></i>
                    By Jean
                  </a>
                </li>
                <li>
                  <a>
                    <i className="fal fa-folder-open"></i>
                    Medical
                  </a>
                </li>
              </ul>
            </div>
            <h5>
              <a>Having overw eight and depression can </a>
            </h5>
          </div>
          <Link to="/blog" className="btn-link">
            Ver mais+
          </Link>
        </div>
      </article>
    </div>
  );
}

export default CardNews;
