import React, { useContext, useEffect, useState } from 'react'
import Comments from '../Comments'
import Recvid from '../Recvid'
import GlobalObj from '../store/global-objects'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
function Videoplay(props) {
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
    <div className='video-play'>
      <div className='left-part'>
        <iframe src={`https://www.youtube.com/embed/${ctx.currvid.id}`}
          width={'800'}
          height={'500'}
          frameBorder="0"
          allow="fullscreen"></iframe>
        <h2>{ctx.currvid.snippet.title}</h2>
        <h4>{ctx.currvid.statistics.viewCount} Views</h4>
        <div className='info-video'>
          <p>{ctx.currvid.snippet.channelTitle}</p>
          <button className='like'><ThumbUpAltIcon></ThumbUpAltIcon> {likes}</button>
          <button className='like'><ThumbDownIcon></ThumbDownIcon> Dislike</button>
          <button className='like'><ShareIcon></ShareIcon> Share</button>
        </div>
        <div className='des-box'>
          <h4>Description</h4>
          <p>{ctx.currvid.snippet.description}</p>
        </div>
        <div>
          <h3>Comments</h3>
          <Comments></Comments>
        </div>
      </div>

      <div className='right-part'>
        <Recvid />
      </div>
    </div>
  )
}

export default Videoplay
