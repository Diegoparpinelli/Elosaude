import React from 'react'
import { Link } from 'react-router-dom'

function ItemTag(props) {
  return (
    <Link to={props.link}>{props.title}</Link>

  )
}

export default ItemTag