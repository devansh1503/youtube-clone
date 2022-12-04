import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import CommentTile from './CommentTile'
import GlobalObj from './store/global-objects'

function Comments(props) {
    const ctx = useContext(GlobalObj)
    const[comments, setComments] = useState([])
    var id = (ctx.currvid.kind === "youtube#playlistItem") ? ctx.currvid.snippet.resourceId.videoId : ctx.currvid.id
    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${id}&key=${ctx.apikey}`)
            .then(response => response.json())
            .then(data => setComments(data.items))
    }, [ctx.currvid.id])
    if(comments){
        console.log(true)
    }
    else{
        return <div>Comments Disabled</div>
    }
    return (
        <div>
            {comments.map((ele)=>{
                return <CommentTile 
                boxcs = {props.boxcs}
                img={ele.snippet.topLevelComment.snippet.authorProfileImageUrl} 
                userName={ele.snippet.topLevelComment.snippet.authorDisplayName} 
                comm={ele.snippet.topLevelComment.snippet.textOriginal}></CommentTile>
            })}
        </div>
    )
}

export default Comments
