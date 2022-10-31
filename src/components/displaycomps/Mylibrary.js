import React, { useContext, useEffect } from 'react'
import Cardtile from '../Cardtile'
import GlobalObj from '../store/global-objects'
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';

function Mylibrary(props) {
  let lightcss = {}
  if (props.ltm) {
    lightcss = {
      backgroundColor: "white",
      color: "black"
    }
  }
  props.setC(false);
  const ctx = useContext(GlobalObj)
  const[open,setOpen] = useState(false)
  function handleClose(){
    setOpen(false)
  }
  if(ctx.library === undefined){
    return <div className='library-style'><div className='libempty'>Library is empty</div></div>
  }
  return (
    <div className='library-style' style={lightcss}>
      {ctx.library.length === 0 && <div className='libempty' style={lightcss}>Library is empty</div>}
      {ctx.library.map((ele) => {
        return <Cardtile
          ltm={props.ltm}
          img={ele.url}
          title={ele.title}
          channel={ele.channel}
          stats={ele.channel}
          onRem = {setOpen} />
      })}
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        message="Removed Successfully!"
      />
    </div>
  )
}

export default Mylibrary
