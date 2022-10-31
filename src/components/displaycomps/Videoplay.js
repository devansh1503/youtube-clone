import React, { useContext, useEffect, useState } from 'react'
import Comments from '../Comments'
import Recvid from '../Recvid'
import GlobalObj from '../store/global-objects'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
function Videoplay(props) {
  let lightcss = {}
  let boxcss = {}
  if (props.ltm) {
    lightcss = {
      backgroundColor: "white",
      color: "black"
    }
    boxcss = {
      backgroundColor: "rgb(242,242,242)",
      color: "black"
    }
  }
  props.setC(false);
  const ctx = useContext(GlobalObj)
  console.log(ctx.currvid)
  window.scrollTo(0, 0)
  var likes = ctx.currvid.statistics.likeCount;
  var len = likes.length;
  if(len>=3 && len<=6){
    likes = Math.round(likes /1000);
    likes = likes+"K";
  }
  if(len>6){
    likes = Math.round(likes/100000)/10;
    likes = likes+"M";
  }
  return (
    <div className='video-play' style={lightcss}>
      <div className='left-part'>
        <iframe 
          className='if'
          src={`https://www.youtube.com/embed/${ctx.currvid.id}`}
          width={'800'}
          height={'500'}
          frameBorder="0"
          allow="fullscreen"></iframe>
        <h2 style={lightcss}>{ctx.currvid.snippet.title}</h2>
        <h4 style={lightcss}>{ctx.currvid.statistics.viewCount} Views</h4>
        <div className='info-video'>
          <p style={lightcss}>{ctx.currvid.snippet.channelTitle}</p>
          <button style={boxcss} className='like'><ThumbUpAltIcon></ThumbUpAltIcon> {likes}</button>
          <button style={boxcss} className='like'><ThumbDownIcon></ThumbDownIcon> Dislike</button>
          <button style={boxcss} className='like'><ShareIcon></ShareIcon> Share</button>
        </div>
        <div className='des-box' style={boxcss}>
          <h4 style={boxcss}>Description</h4>
          <p style={boxcss}>{ctx.currvid.snippet.description}</p>
        </div>
        <div className='cmnts'>
          <h3 style={lightcss}>Comments</h3>
          <Comments boxcs={boxcss}></Comments>
        </div>
      </div>

      <div className='right-part'>
        <Recvid lightcs={lightcss} />
      </div>
    </div>
  )
}

export default Videoplay
