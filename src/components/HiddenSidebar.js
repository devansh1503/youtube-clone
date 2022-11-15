import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import MovieIcon from '@mui/icons-material/Movie';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { Link } from "react-router-dom";
import NightlightIcon from '@mui/icons-material/Nightlight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function HiddenSidebar(props) {
    let lightcss = {}
    if (props.ltm) {
        lightcss = {
            backgroundColor: "rgb(242,242,242)",
            color: "black"
        }
    }
    return (
        <div className='hiddenside' style={lightcss}>
            <ul>
                <li className='listItem2' style={lightcss} >
                    <HomeIcon />
                    <Link style={lightcss} to="/" className='hidlist'>Home</Link>
                </li>
                <li className='listItem2' style={lightcss}>
                    <ExploreIcon />
                    <Link style={lightcss} to="/library" className='hidlist'>Library</Link>
                </li>
                <li className='listItem2' style={lightcss}>
                    <MovieIcon />
                    Shorts
                </li>
                <li className='listItem2' style={lightcss}>
                    <SubscriptionsIcon />
                    Subscriptions
                </li>
                <li className='listItem2' style={lightcss}>
                {props.ltm && <NightlightIcon onClick={()=>{props.setltm(false)}} />}
                {!props.ltm && <WbSunnyIcon onClick={()=>{props.setltm(true)}}/>}
                </li>
            </ul>
        </div>
    )
}

export default HiddenSidebar
