import React from "react";
import { Link } from 'react-router-dom'
import './VendingMachine.css'

const VendingMachine = () => {
    return (
        <div className="VendingMachine">
            <div className="VendingMachine-greeting">
                <p>Hello I am a vending machine. What would you like?</p>
            </div>
            <div className="VendingMachine-items">
                <Link to="/water">Water</Link>
                <Link to="/candy">Candy</Link>
                <Link to="/chips">Chips</Link>
            </div>
        </div>
    )
}

export default VendingMachine