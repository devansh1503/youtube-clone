import React from 'react'

function CommentTile(props) {
  return (
    <div className='comm-tile' style={props.boxcs}>
      <div className='upper-part'>
        <img className='channel-image' src={props.img}></img>
        <p>{props.userName}</p>
      </div>
      <p className='comm'>{props.comm}</p>
    </div>
  )
}

export default CommentTile
