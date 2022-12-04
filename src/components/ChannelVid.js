import React, { useContext, useEffect, useState } from 'react'
import Cardtile from './Cardtile'
import Channelvidtile from './Channelvidtile'
import GlobalObj from './store/global-objects'

function ChannelVid(props) {
    const ctx = useContext(GlobalObj)
    const [videosdata, setVids] = useState([])
    const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${props.id}&key=${ctx.apikey}&maxResults=20`
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setVids(data.items))
    }, [])
    return (
        <div className='channel-vids'>
            {videosdata.map((element) => {
                return <Channelvidtile
                    img={element.snippet.thumbnails.high.url}
                    title={element.snippet.title}
                    channel={element.snippet.channelTitle}
                    stats=""
                    eledata={element}
                    ltm={props.ltm}></Channelvidtile>
            })}
        </div>
    )
}

export default ChannelVid
