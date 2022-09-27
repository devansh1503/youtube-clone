import React from 'react'
import { Link } from "react-router-dom";
function Categories(props) {
    return (
        <div className='cat'>
            <ul>
                <li className='listItem3' onClick={()=>{props.setCatItem("weeknd")}}>
                    <Link className="cat-txt" to="/category">Weeknd</Link>
                </li>
                <li className='listItem3'onClick={()=>{props.setCatItem("Dua Lipa")}}>
                    <Link  className="cat-txt" to="/category">Dua Lipa</Link>
                </li>
                <li className='listItem3'onClick={()=>{props.setCatItem("Sports")}}>
                    <Link  className="cat-txt" to="/category">Sports</Link>
                </li>
                <li className='listItem3'onClick={()=>{props.setCatItem("Motivation")}}>
                    <Link  className="cat-txt" to="/category">Motivation</Link>
                </li>
                <li className='listItem3'onClick={()=>{props.setCatItem("Coding DSA Java C++ pythonb")}}>
                    <Link  className="cat-txt" to="/category">Coding</Link>
                </li>
                <li className='listItem3'onClick={()=>{props.setCatItem("Aptitude")}}>
                    <Link  className="cat-txt" to="/category">Aptitude</Link>
                </li>
                <li className='listItem3'onClick={()=>{props.setCatItem("Jordan Peterson")}}>
                    <Link  className="cat-txt" to="/category">Jordan Peterson</Link>
                </li>
                <li className='listItem3'onClick={()=>{props.setCatItem("Hollywood Movies")}}>
                    <Link  className="cat-txt" to="/category">Movies</Link>
                </li>
                <li className='listItem3'onClick={()=>{props.setCatItem("Music")}}>
                    <Link  className="cat-txt" to="/category">Music</Link>
                </li>
                <li className='listItem3'onClick={()=>{props.setCatItem("Marvel DC")}}>
                    <Link  className="cat-txt" to="/category">Superhero</Link>
                </li>
            </ul>
        </div>
    )
}

export default Categories
