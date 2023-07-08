import React from 'react'

import imageAboutMe from "../../src/assets/img/blog-standard/author.jpg"

function AboutMe() {
  return (
    <div className="widget widget-about">
      <h5 className="widget-title">Sobre</h5>
      <div className="sigma_author-box text-center">
        <img src={imageAboutMe} alt="img" />
        <h5>Rosalina D. Willaimson</h5>
        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt.</p>
        <ul className="sigma_sm justify-content-center">
          <li>
            <a>
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a>
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a>
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a>
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AboutMe