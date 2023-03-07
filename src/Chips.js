import React from "react";
import { Link } from 'react-router-dom'
import chips from './chips.gif'
import './Chips.css'

const Chips = () => {
    return (
        <div className="Chips">
            <img src={chips} alt="img" />
            <Link to="/">Go Back</Link>
            <img src={chips} alt="img" />
        </div>
    )
}

export default Chips