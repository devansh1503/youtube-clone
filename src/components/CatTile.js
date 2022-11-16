import React, { useContext } from 'react'
import GlobalObj from './store/global-objects'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';

function CatTile(props) {
    const ctx = useContext(GlobalObj)
    let lightcss = {}
    if (props.ltm) {
        lightcss = {
            backgroundColor: "white",
            color: "black"
        }
    }
    const [videoinfo, setVideoinfo] = useState({})
    useEffect(
        () => {
            fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&id=${props.id}&key=${ctx.apikey}`)
                .then(response => response.json())
                .then(data => setVideoinfo(data.items[0]))
        },
        []
    )
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
        ctx.changeCurrVideo(videoinfo)
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

export default CatTile
