import React, { useContext, useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import GlobalObj from './store/global-objects'
function SearchTile(props) {
  const ctx = useContext(GlobalObj)
  const typeofprop = props.tiletype
  const[videoinfo, setVideoinfo] = useState({})
  useEffect(
    () => {
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&id=${props.id}&key=${ctx.apikey}`)
    .then(response => response.json())
    .then(data => setVideoinfo(data.items[0]))
    },
    []
  )
  const onclickhandle = () => {
    ctx.changeCurrVideo(videoinfo)
    console.log(videoinfo)
  }

  return (
    <Link to="/watch" className='search-tile' onClick={onclickhandle}>
      <img src={props.img} className={(typeofprop === "youtube#channel" && "channel-img") || "video-img"}></img>
      <div className='info-search'>
        <h3>{props.title}</h3>
        <p>{props.info}</p>
        <p>{props.channel}</p>
        <p>{props.des.slice(0,75)}</p>
      </div>
    </Link>
  )
}

export default SearchTile
