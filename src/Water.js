import React, {useState} from "react";
import { Link } from 'react-router-dom'
import './Water.css'

const Water = () => {
    const [counter, setCounter] = useState(1)
    const updateCounter = () => {
        setCounter(counter+1)
    }
    return (
        <div className="Water">
            <div className="Water-card">
                <p>How many would you like?</p>
                <p>{counter}<button onClick={updateCounter}>+</button></p>
                <Link to="/">Go Back</Link>
            </div>
        </div>
    )
}

export default Water