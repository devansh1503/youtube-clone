import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import MovieIcon from '@mui/icons-material/Movie';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from "react-router-dom";
function Sidebar(props) {
  let lightcss = {}
    if (props.ltm) {
        lightcss = {
            backgroundColor: "rgb(242,242,242)",
            color: "black"
        }
    }
  return (
    <div className='sidebar' style={lightcss}>
      <div className='route-ele'>
        <ul>
            <li className='listItem' style={lightcss}>
                <HomeIcon/>
                <Link style={lightcss} to="/" className='homebtn'>Home</Link>
            </li>
            <li className='listItem' style={lightcss}>
                <ExploreIcon/>
                <Link style={lightcss} to="/library" className='homebtn'>Library</Link>
            </li>
            <li className='listItem' style={lightcss}>
                <MovieIcon/>
                <Link style={lightcss} to="/library" className='homebtn'>Shorts</Link>
            </li>
            <li className='listItem' style={lightcss}>
                <SubscriptionsIcon/>
                <Link style={lightcss} to="/library" className='homebtn'>Subscriptions</Link>
            </li>
        </ul>
      </div>
      <hr/>
      <div className='route-ele'>
        <p>EXPLORE</p>
        <ul>
            <li className='listItem' style={lightcss}>
                <LocalMoviesIcon/>
                Movies
            </li>
            <li className='listItem' style={lightcss}>
                <SportsEsportsIcon/>
                Gaming
            </li>
            <li className='listItem' style={lightcss}>
                <LiveTvIcon/>
                Live
            </li>
            <li className='listItem' style={lightcss}>
                <SchoolIcon/>
                Learning
            </li>
        </ul>

      </div>
    </div>
  )
}

export default Sidebar
