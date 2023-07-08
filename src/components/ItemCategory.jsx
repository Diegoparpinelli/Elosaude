import React from 'react'

function ItemCategory(props) {
  return (
    <li>
      <a>
        {props.title}
        <span>{props.numberPosts}</span>
      </a>
    </li>
  )
}

export default ItemCategory