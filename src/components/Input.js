import React, { useContext, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import GlobalObj from './store/global-objects';
import { Link } from "react-router-dom";
function Input(props) {
  const [searchItem, setSearchItem] = useState('')
  const ctx = useContext(GlobalObj)
  const onChangeHandler = (event) => {
    console.log(searchItem)
    setSearchItem(event.target.value)
  }
  const searchString = () => {
    localStorage.setItem('currsearch',searchItem)
    ctx.changeSearchItem(searchItem)
    console.log(ctx.searchItem)
    props.hideSearch({})
  }
  let lightcss={}
  if(props.ltm){
    lightcss = {
      backgroundColor:"white",
      color:"black"
    }
  }
  return (
    <div className='input-comp'>
      <input style={lightcss} placeholder='Search' className='inp-search' onChange={onChangeHandler}></input>
      <Link to='/search' className='search-icon2'>
        <div className='search-icon' onClick={searchString} style={lightcss}>
          <SearchIcon />
        </div>
      </Link>
      <div className='voice-icon' style={lightcss}>
        <KeyboardVoiceIcon />
      </div>
    </div>
  )
}

export default Input
