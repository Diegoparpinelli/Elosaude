import React from 'react'

import imageHome348 from "/src/assets/img/home-1/348x350.jpg"

function CardTeam(props) {

  return (
    <div>
      <div className="sigma_team style-14">
        <div className="sigma_team-thumb">
          <img src={imageHome348} alt="team" />
        </div>
        <div className="sigma_team-body">
          <h5>

            <a >{props.name}</a>

          </h5>
          <div className="sigma_team-categories">
            <a className="sigma_team-category">Obstetrics & Gynaecology</a>
          </div>
          <div className="sigma_team-info">
            <span>

              <i className="fal fa-map-marker-alt"></i>

              Hong Kong

            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardTeam