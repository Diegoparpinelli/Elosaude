import React from 'react'

import imageAboutUs255 from "../../src/assets/img/about-us/255x255.jpg"

function CardTeamAbout() {

  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="sigma_team style-15">
        <div className="sigma_team-thumb">
          <img src={imageAboutUs255} alt="team" />
        </div>
        <div className="sigma_team-body">
          <h5>

            <a>Mega Nelson</a>

          </h5>
          <div className="sigma_team-categories">
            <a className="sigma_team-category">Physiotherapist</a>
          </div>
          <ul className="sigma_social-icons">
            <li>
              <a><i className="fab fa-facebook-f"></i></a>
            </li>
            <li>
              <a><i className="fab fa-twitter"></i></a>
            </li>
            <li>
              <a><i className="fab fa-instagram"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardTeamAbout