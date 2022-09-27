import React, { useContext, useEffect, useState } from 'react'
import SearchTile from '../SearchTile'
import GlobalObj from '../store/global-objects'

function Searchpage(props) {
  props.setC(false);
    const[videos, setVideoData] = useState([])
    const ctx = useContext(GlobalObj)
    useEffect(()=>{
      props.setp(30)
      const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${ctx.searchItem}&key=${ctx.apikey}&maxResults=20`
        fetch(url)
        .then(response => response.json())
        .then(data => setVideoData(data.items))
        props.setp(70)
        props.setp(100)
        console.log("Fetching search data")
      },[ctx.searchItem])
  return (
    <div className='head-search'>
      {videos.map((element) => {
        return <SearchTile 
        tiletype={element.id.kind}
        img={element.snippet.thumbnails.high.url} 
        title={element.snippet.title} 
        info={element.snippet.publishedAt} 
        channel={element.snippet.channelTitle} 
        des={element.snippet.description}
        id={element.id.videoId}></SearchTile>
      })}
    </div>
  )
}

export default Searchpage
