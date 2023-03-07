import React, { useState } from "react";
import { Link } from 'react-router-dom'
import candy1 from './candy1.png'
import './Candy.css'

const Candy = () => {
    const [candies, setCandies] = useState([])

    const getCandy = () => {
        const x = window.innerWidth * Math.random();
        const y = window.innerHeight * Math.random();
        setCandies(items=>[...items, {x, y}])
    }
    
    const img = candies.map((candy, i) => (
        <img src={candy1} alt="img" key={i} className="Candy-img" style={{ top: `${candy.y}px`, left: `${candy.x}px` }}/>
    ))

    return (
        <div className="Candy">
             <div className="Candy-card">       
                <button onClick={getCandy}>More</button>
                <br></br>
                <Link to="/">Go Back</Link>
            </div>
            {img}
        </div>
    )
}

export default Candy