import React, { useContext } from 'react'
import GlobalObj from './store/global-objects'
import { Link } from "react-router-dom";

function Cardtile(props) {
  const ctx = useContext(GlobalObj)
  let lightcss = {}
  if (props.ltm) {
    lightcss = {
      backgroundColor: "white",
      color: "black"
    }
  }
  function HandleLib() {
    ctx.addToLib({
      url: props.img,
      title: props.title,
      channel: props.channel,
      stats: props.stats
    })
    // alert("Added To Library")
    // console.log(ctx.library)
    props.openSnack(true)
  }
  function removeLib() {
    ctx.removeFromLib(props.title)
    console.log(ctx.library)
    props.onRem(true)
  }
  function handleClick() {
    ctx.changeCurrVideo(props.eledata)
  }
  return (
    <div className='card'>
      <Link to="/watch" onClick={handleClick} className="card" style={lightcss}>
        <img src={props.img}></img>
        <div className='info'>
          <img className='profile-pic'></img>
          <div>
            <h4>{props.title}</h4>
            <p>{props.channel}</p>
            <p>{Math.round(props.stats.viewCount / 100000) / 10}M views</p>
          </div>
        </div>
      </Link>
      <div className='addremovebtn'>
        <button onClick={HandleLib}>Add</button>
        <button onClick={removeLib}>Remove</button>
      </div>
    </div>
  )
}

export default Cardtile
