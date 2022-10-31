import React from 'react'
import { Link } from "react-router-dom";
function Categories(props) {
    let lightcss = {}
    let boxcss = {}
    if (props.ltm) {
        lightcss = {
            backgroundColor: "rgb(242,242,242)",
            color: "black"
        }
        boxcss = {
            backgroundColor: "#AAAAAA"
        }
    }
    return (
        <div className='cat' style={lightcss}>
            <ul>
                <li style={boxcss} className='listItem3' onClick={()=>{props.setCatItem("weeknd")}}>
                    <Link className="cat-txt" to="/category">Weeknd</Link>
                </li>
                <li style={boxcss} className='listItem3'onClick={()=>{props.setCatItem("Dua Lipa")}}>
                    <Link  className="cat-txt" to="/category">Dua Lipa</Link>
                </li>
                <li style={boxcss} className='listItem3'onClick={()=>{props.setCatItem("Sports")}}>
                    <Link  className="cat-txt" to="/category">Sports</Link>
                </li>
                <li style={boxcss} className='listItem3'onClick={()=>{props.setCatItem("Motivation")}}>
                    <Link  className="cat-txt" to="/category">Motivation</Link>
                </li>
                <li style={boxcss} className='listItem3'onClick={()=>{props.setCatItem("Coding DSA Java C++ pythonb")}}>
                    <Link  className="cat-txt" to="/category">Coding</Link>
                </li>
                <li style={boxcss} className='listItem3'onClick={()=>{props.setCatItem("Aptitude")}}>
                    <Link  className="cat-txt" to="/category">Aptitude</Link>
                </li>
                <li style={boxcss} className='listItem3'onClick={()=>{props.setCatItem("Jordan Peterson")}}>
                    <Link  className="cat-txt" to="/category">Jordan Peterson</Link>
                </li>
                <li style={boxcss} className='listItem3'onClick={()=>{props.setCatItem("Hollywood Movies")}}>
                    <Link  className="cat-txt" to="/category">Movies</Link>
                </li>
                <li style={boxcss} className='listItem3'onClick={()=>{props.setCatItem("Music")}}>
                    <Link  className="cat-txt" to="/category">Music</Link>
                </li>
                <li style={boxcss} className='listItem3'onClick={()=>{props.setCatItem("Marvel DC")}}>
                    <Link  className="cat-txt" to="/category">Superhero</Link>
                </li>
            </ul>
        </div>
    )
}

export default Categories
