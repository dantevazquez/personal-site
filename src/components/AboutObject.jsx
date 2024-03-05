import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";

function AboutObject({calculateGroundHeight}) {
    return (
        <FaRegUserCircle 
            className='about-box'
            style={{
                position: 'absolute',
                left: '1000px',
                bottom: `${110 + calculateGroundHeight(1000)}px`, 
                animation: 'coin-spin 2s linear infinite' // Add a coin spinning animation
            }}
            size={50}
        />
    )
}

export default AboutObject
