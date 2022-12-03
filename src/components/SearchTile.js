import React, { useContext, useEffect, useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import GlobalObj from './store/global-objects'
import axios from 'axios'
function SearchTile(props) {
  const ctx = useContext(GlobalObj)
  const typeofprop = props.tiletype
  const[videoinfo, setVideoinfo] = useState({})
  const [channeldata, setChannel] = useState({})
  const history = useNavigate()
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
    history('/watch')
  }
  async function fetchdata(){
    const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${props.id}&key=${ctx.apikey}`)
    const dat = res.data.items[0]
    setChannel(dat)
    ctx.changeChannel(dat)
    history('/channel')
  }
  const channelhandle = () => {
    fetchdata()
  }
  let lightcss = {}
  if (props.ltm) {
    lightcss = {
      backgroundColor: "white",
      color: "black"
    }
  }

  return (
    <div className='search-tile' onClick={typeofprop === "youtube#channel" ? channelhandle : onclickhandle}>
        <img src={props.img} className={(typeofprop === "youtube#channel" && "channel-img") || "video-img"}></img>
        <div className='info-search'>
          <h3 style={lightcss}>{props.title}</h3>
          <p>{props.info}</p>
          <p>{props.channel}</p>
          <p>{props.des.slice(0, 75)}</p>
        </div>
      </div>
  )
}

export default SearchTile
