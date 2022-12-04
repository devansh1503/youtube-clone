import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Channelupper from '../Channelupper'
import ChannelVid from '../ChannelVid'
import GlobalObj from '../store/global-objects'

function Channelpage(props) {
  const ctx = useContext(GlobalObj)
  const data = ctx.currChannel
  const playlistid = ctx.currChannel.contentDetails.relatedPlaylists.uploads
  console.log(data)
  let lightcss = {color:"white"}
  
  if (props.ltm) {
    lightcss = {
      backgroundColor: "white",
      color: "black"
    }
    
  }

  return (
    <div className='channelpage' style={lightcss}>
      <div className='channel-info' style={lightcss}>
        <img src={ctx.currChannel.snippet.thumbnails.high.url} className="channel-img"></img>
        <div style={lightcss}>
          <h2>{ctx.currChannel.snippet.title}</h2>
          <p>{ctx.currChannel.statistics.subscriberCount} Subscribers</p>
          <p>{ctx.currChannel.snippet.description}</p>
        </div>
      </div>
      <div className='video'>
        <ChannelVid id={playlistid} ltm={props.ltm}></ChannelVid>
      </div>
    </div>
  )
}

export default Channelpage
