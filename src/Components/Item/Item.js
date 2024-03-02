import React from 'react'
import './Item.css'
export const Item = (props) => {
  return (
    <div className='Item'>
      <img src={props.image} alt='' />
      <p>{props.name}</p>
      <div className='item-prices'>
        <div className='item-proce-new'>
          ${props.new_price}
        </div>
        <div className='item-proce-old'>
          ${props.old_price}
        </div>
      </div>
    </div>
  )
}
