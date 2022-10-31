import React, { useContext, useEffect, useState } from 'react'
import RecTile from './RecTile'
import GlobalObj from './store/global-objects'

function Recvid(props) {
  const ctx = useContext(GlobalObj)
  const [recvids, setRecVid] = useState([])
  useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${ctx.currvid.id}&type=video&key=${ctx.apikey}&maxResults=20`)
      .then(response => response.json())
      .then(data => setRecVid(data.items))
  }, [])
  console.log(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${ctx.currvid.id}&type=video&key=AIzaSyAtDYQnS2TV127akJ7Sw_2EoKBl-dNSLFA`)
  if(!recvids){
    return <div></div>
  }
  return (
    <div>
      {recvids.filter((ele) => {
        if(ele.snippet === undefined){
          return false;
        }
        return true;
      }).map((element) => {
        return <RecTile
          lightcs={props.lightcs}
          tiletyle={element.id.kind}
          img={element.snippet.thumbnails.high.url}
          title={element.snippet.title}
          info=""
          channel={element.snippet.channelTitle}
          des=""
          id={element.id.videoId} ></RecTile>
      })}
    </div>
  )
}

export default Recvid
