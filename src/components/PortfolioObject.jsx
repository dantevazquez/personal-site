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
                bottom: `${110 + calculateGroundHeight(2000)}px`,
                animation: 'coin-spin 2s linear infinite'
            }}
            size={50}
        />
    )
}

export default PortfolioObject