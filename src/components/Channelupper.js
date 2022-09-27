import React, { useEffect, useState } from 'react'

function Channelupper(props) {
    return (
        <div className='channel-details'>
            <img src={props.data.snippet.thumbnails.high.url}></img>
            <div>
                <h2>{props.data.snippet.title}</h2>
                <p>{props.data.statistics.subscriberCount} Subscribers</p>
            </div>
        </div>
    )
}

export default Channelupper
