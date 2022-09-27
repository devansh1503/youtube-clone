import React, { useContext, useEffect, useState } from 'react'
import GlobalObj from '../store/global-objects'
import Cardtile from '../Cardtile'
import Snackbar from '@mui/material/Snackbar';
import CatTile from '../CatTile';

function CatPage(props) {
    const ctx = useContext(GlobalObj)
    const [videoData, setVideoData] = useState([])
    const [open, setOpen] = useState(false)
    function handleClose() {
        setOpen(false)
    }
    props.setC(true)
    useEffect(() => {
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${props.catitem}&key=${ctx.apikey}&maxResults=40`
        fetch(url)
            .then(response => response.json())
            .then(data => setVideoData(data.items))
    }, [props.catitem])
    return (
        <div className='catPagemain'>
            {videoData.map((element) => {
                return <CatTile
                    img={element.snippet.thumbnails.high.url}
                    title={element.snippet.title}
                    channel={element.snippet.channelTitle}
                    stats={""}
                    eledata={element}
                    openSnack = {setOpen}
                    id={element.id.videoId}
                />
            })}
            <Snackbar
                open={open}
                autoHideDuration={1000}
                onClose={handleClose}
                message="Added Successfully!"
            />
        </div>
    )
}

export default CatPage
