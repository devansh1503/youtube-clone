import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Input from './Input';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import NightlightIcon from '@mui/icons-material/Nightlight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function Header(props) {
    const [Style, setStyle] = useState({})
    const [resstyle, setres] = useState({})
    const clickHandle = () => {
        setStyle({ display: 'flex' })
        setres({display:'none'})
    }
    let lightcss = {}
    if (props.ltm) {
        lightcss = {
            backgroundColor: "rgb(242,242,242)",
            color: "black"
        }
    }
    return (
        <div className='header' style={lightcss}>
            <div className='header-left' style={resstyle}>
                <div onClick={props.hidesidebar}>
                    <MenuIcon />
                </div>
                <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill-rule="evenodd" clip-rule="evenodd"><path fill="#F44336" d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438z" /><path fill="#FAFAFA" d="M6 11.5v-6l5 3z" /></g></svg>
                <h2>YouTube</h2>
            </div>
            <div className='header-center' style={Style}>
                <Input ltm={props.ltm} hideSearch={setStyle} disres={setres} />
            </div>

            <div className='header-right'>
                <VideoCallIcon />
                <NotificationsIcon />
                <AccountCircleIcon />
                {props.ltm && <NightlightIcon onClick={()=>{props.setltm(false)}} />}
                {!props.ltm && <WbSunnyIcon onClick={()=>{props.setltm(true)}}/>}
            </div>
            <div style={resstyle} className='res-search' onClick={clickHandle}>
                <SearchIcon />
            </div>
        </div>
    )
}

export default Header
