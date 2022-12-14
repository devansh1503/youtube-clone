import React, { useContext, useEffect, useState } from 'react'
import SearchTile from '../SearchTile'
import GlobalObj from '../store/global-objects'

function Searchpage(props) {
  let lightcss = {}
  if (props.ltm) {
    lightcss = {
      backgroundColor: "white",
      color: "black"
    }
  }
  props.setC(false);
    const[videos, setVideoData] = useState([])
    const ctx = useContext(GlobalObj)
    const srch = localStorage.getItem('currsearch')
    useEffect(()=>{
      props.setp(30)
      const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${srch}&key=${ctx.apikey}&maxResults=20`
        fetch(url)
        .then(response => response.json())
        .then(data => setVideoData(data.items))
        props.setp(70)
        props.setp(100)
        console.log("Fetching search data")
      },[ctx.searchItem])
  return (
    <div className='head-search' style={lightcss}>
      {videos.map((element) => {
        return <SearchTile 
        ltm = {props.ltm}
        tiletype={element.id.kind}
        img={element.snippet.thumbnails.high.url} 
        title={element.snippet.title} 
        info={element.snippet.publishedAt} 
        channel={element.snippet.channelTitle} 
        des={element.snippet.description}
        id={element.id.kind==="youtube#channel" ? element.id.channelId : element.id.videoId}></SearchTile>
      })}
    </div>
  )
}

export default Searchpage
