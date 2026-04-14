import React from 'react'
import { FaRegFileCode } from "react-icons/fa";
import './styles/about.css'
import INFO from '../data/user';

function PortfolioObject({ calculateGroundHeight }) {
    
    const projectsObj = INFO.collisionObjects.find(obj => obj.dialogPage === 'projects');

    return (
        <FaRegFileCode
            className='portfolio-box'
            style={{
                position: 'absolute',
                left: `${projectsObj.newPosition}px`,
                bottom: `${110 + calculateGroundHeight(projectsObj.newPosition)}px`,
                animation: 'coin-spin 2s linear infinite'
            }}
            size={50}
        />
    )
}

export default PortfolioObject
