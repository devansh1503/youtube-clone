import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import MovieIcon from '@mui/icons-material/Movie';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { Link } from "react-router-dom";

function HiddenSidebar() {
    return (
        <div className='hiddenside'>
            <ul>
                <li className='listItem2'>
                    <HomeIcon />
                    <Link to="/" className='hidlist'>Home</Link>
                </li>
                <li className='listItem2'>
                    <ExploreIcon />
                    <Link to="/library" className='hidlist'>Library</Link>
                </li>
                <li className='listItem2'>
                    <MovieIcon />
                    Shorts
                </li>
                <li className='listItem2'>
                    <SubscriptionsIcon />
                    Subscriptions
                </li>
            </ul>
        </div>
    )
}

export default HiddenSidebar
