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
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='route-ele'>
        <ul>
            <li className='listItem'>
                <HomeIcon/>
                <Link to="/" className='homebtn'>Home</Link>
            </li>
            <li className='listItem'>
                <ExploreIcon/>
                <Link to="/library" className='homebtn'>Library</Link>
            </li>
            <li className='listItem'>
                <MovieIcon/>
                <Link to="/library" className='homebtn'>Shorts</Link>
            </li>
            <li className='listItem'>
                <SubscriptionsIcon/>
                <Link to="/library" className='homebtn'>Subscriptions</Link>
            </li>
        </ul>
      </div>
      <hr/>
      <div className='route-ele'>
        <p>EXPLORE</p>
        <ul>
            <li className='listItem'>
                <LocalMoviesIcon/>
                Movies
            </li>
            <li className='listItem'>
                <SportsEsportsIcon/>
                Gaming
            </li>
            <li className='listItem'>
                <LiveTvIcon/>
                Live
            </li>
            <li className='listItem'>
                <SchoolIcon/>
                Learning
            </li>
        </ul>

      </div>
    </div>
  )
}

export default Sidebar
