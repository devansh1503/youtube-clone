
import React, { useContext, useEffect, useState } from 'react'
import Cardtile from '../Cardtile'
import GlobalObj from '../store/global-objects'
import Snackbar from '@mui/material/Snackbar';

function Home(props) {
  props.setC(true)
  const ctx = useContext(GlobalObj)
  const [video, setVideo] = useState([])
  const [usvideo, setusvideo] = useState([])
  const [jpvideo, setjpvideo] = useState([])
  const [open, setOpen] = useState(false)
  let lightcss = {}
  if (props.ltm) {
    lightcss = {
      backgroundColor: "white",
      color: "black"
    }
  }
  function handleClose() {
    setOpen(false)
  }
  useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&chart=mostPopular&regionCode=US&key=${ctx.apikey}&maxResults=12`)
      .then(response => response.json())
      .then(data => setVideo(data.items))
  }, [])
  useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&chart=mostPopular&regionCode=IN&key=${ctx.apikey}&maxResults=12`)
      .then(response => response.json())
      .then(data => setusvideo(data.items))
  }, [])
  useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&chart=mostPopular&regionCode=JP&key=${ctx.apikey}&maxResults=12`)
      .then(response => response.json())
      .then(data => setjpvideo(data.items))
  }, [])
  return (
    <div className='home' style={lightcss}>
      <h2>US</h2>
      <div className='stream-tile'>
        {video.map((element) => {
          return <Cardtile
            ltm={props.ltm}
            img={element.snippet.thumbnails.high.url}
            title={element.snippet.title}
            channel={element.snippet.channelTitle}
            stats={element.statistics}
            eledata={element}
            openSnack={setOpen} />
        })}
      </div>
      <hr></hr>
      <h2>INDIA</h2>
      <div className='stream-tile'>
        {usvideo.map((element) => {
          return <Cardtile
            ltm={props.ltm}
            img={element.snippet.thumbnails.high.url}
            title={element.snippet.title}
            channel={element.snippet.channelTitle}
            stats={element.statistics}
            eledata={element}
            openSnack={setOpen} />
        })}
      </div>
      <hr></hr>
      <h2>JAPAN</h2>
      <div className='stream-tile'>
        {jpvideo.map((element) => {
          return <Cardtile
            ltm={props.ltm}
            img={element.snippet.thumbnails.high.url}
            title={element.snippet.title}
            channel={element.snippet.channelTitle}
            stats={element.statistics}
            eledata={element}
            openSnack={setOpen} />
        })}
      </div>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        message="Added Successfully!"
      />
    </div>
  )
}

export default Home
