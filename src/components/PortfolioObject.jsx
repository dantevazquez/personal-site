import React from 'react'
import { FaRegFileCode } from "react-icons/fa";
import './styles/about.css'
function PortfolioObject({ calculateGroundHeight }) {
    return (
        <FaRegFileCode
            className='portfolio-box'
            style={{
                position: 'absolute',
                left: '2000px',
                bottom: `${110 + calculateGroundHeight(2000)}px`, // Adjust the box's position based on the ground height
                animation: 'coin-spin 2s linear infinite' 
                // width: '50px',
                // height: '50px',
                // backgroundColor: 'green',
            }}
            size={50}
        />
    )
}

export default PortfolioObject