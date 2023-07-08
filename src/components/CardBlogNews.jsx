import React from 'react'
import { Link } from 'react-router-dom'

import blogStandart from "../../src/assets/img/blog-standard/730x415.jpg"

function CardBlogNews({ title, content, date, description, author }) {

  function setContent(c) {
    sessionStorage.setItem("postContent", c)
  }

  return (

    <article className="sigma_post style-7">
      <div className="sigma_post-thumb">
        <Link to='/blog/details'>
          <img src={blogStandart} alt="img" />
        </Link>
      </div>
      <div className="sigma_post-body">
        <div className="sigma_post-content">
          <h5>

            <Link to='/blog/details' onClick={() => { setContent(content) }}>{title}</Link>

          </h5>
          <p>{description}</p>
          <div className="sigma_post-meta">
            <ul>
              <li className="author">
                <i className="fal fa-user-circle"></i>
                <a>{author}</a>
              </li>
              <li>
                <i className="fal fa-calendar-alt"></i>
                on <Link to='/blog/details' className="ms-2">{date}</Link>
              </li>
              <li>
                <i className="fal fa-comment-dots"></i>
                <a >572</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>

  )
}

export default CardBlogNews