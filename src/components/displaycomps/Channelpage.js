import React, { useContext, useEffect, useState } from 'react'
import Channelupper from '../Channelupper'
import ChannelVid from '../ChannelVid'
import GlobalObj from '../store/global-objects'

function Channelpage() {
  const ctx = useContext(GlobalObj)
  const [channeldata, setChannel] = useState({})
  useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCV6qn6kKTkKID03Adnfv3GQ&key=${ctx.apikey}`)
      .then(response => response.json())
      .then(data => setChannel(data.items[0]))
  }, [])
  console.log(channeldata)
  return (
    <div>
      <div>
        <Channelupper data={channeldata} />
      </div>
      <div className='video'>
        <ChannelVid id={channeldata.contentDetails.relatedPlaylists.uploads}></ChannelVid>
      </div> 
    </div>
  )
}

export default Channelpage
