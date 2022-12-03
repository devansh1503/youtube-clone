import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import MovieIcon from '@mui/icons-material/Movie';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
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
            <li className='listItem' style={lightcss} onClick={()=>{props.setCatItem("shorts")}}>
                <MovieIcon/>
                <Link style={lightcss} to="/category" className='homebtn'>Shorts</Link>
            </li>
            <li className='listItem' style={lightcss} onClick={()=>{props.setCatItem("weeknd, kendrick lamar, doja cat, dua lipa, pritam, hindi songs, english songs, justin beiber")}}>
                <MusicNoteIcon/>
                <Link style={lightcss} to="/category" className='homebtn'>Music</Link>
            </li>
        </ul>
      </div>
      <hr/>
      <div className='route-ele'>
        <p>EXPLORE</p>
        <ul>
            <li className='listItem' style={lightcss} onClick={()=>{props.setCatItem("Hollywood Movies")}}>
                <LocalMoviesIcon/>
                <Link style={lightcss} to="/category" className='homebtn'>Movies</Link>
            </li>
            <li className='listItem' style={lightcss} onClick={()=>{props.setCatItem("Gaming mortal 8bit thug valorant gta")}}>
                <SportsEsportsIcon/>
                <Link style={lightcss} to="/category" className='homebtn'>Gaming</Link>
            </li>
            <li className='listItem' style={lightcss} onClick={()=>{props.setCatItem("currently live")}}>
                <LiveTvIcon/>
                <Link style={lightcss} to="/category" className='homebtn'>Live</Link>
            </li>
            <li className='listItem' style={lightcss} onClick={()=>{props.setCatItem("Learning education studies exams")}}>
                <SchoolIcon/>
                <Link style={lightcss} to="/category" className='homebtn'>Learning</Link>
            </li>
            <li className='listItem' style={lightcss} onClick={()=>{props.setCatItem("saiman says, carryminati, ashish ch, bb ki vines, dank rishu, comedy")}}>
                <TheaterComedyIcon/>
                <Link style={lightcss} to="/category" className='homebtn'>Comedy</Link>
            </li>
        </ul>

      </div>
    </div>
  )
}

export default Sidebar
