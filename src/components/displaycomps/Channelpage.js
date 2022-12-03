import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Channelupper from '../Channelupper'
import ChannelVid from '../ChannelVid'
import GlobalObj from '../store/global-objects'

function Channelpage() {
  const ctx = useContext(GlobalObj)
  const data = ctx.currChannel
  const playlistid = ctx.currChannel.contentDetails.relatedPlaylists.uploads
  console.log(data)

  return (
    <div className='channelpage'>
      <img src={ctx.currChannel.snippet.thumbnails.high.url} className="channel-img"></img>
      <div>
        <h2>{ctx.currChannel.snippet.title}</h2>
        <p>{ctx.currChannel.statistics.subscriberCount} Subscribers</p>
        <p>{ctx.currChannel.snippet.description}</p>
      </div>
      {/* <div className='video'>
        <ChannelVid id={playlistid}></ChannelVid>
      </div> */}
    </div>
  )
}

export default Channelpage
