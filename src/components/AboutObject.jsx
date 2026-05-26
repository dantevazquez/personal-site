import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import INFO from '../data/user';

function AboutObject({ calculateGroundHeight }) {
    
    const aboutObj = INFO.collisionObjects.find(obj => obj.dialogPage === 'about');

    return (
        <FaRegUserCircle 
            className='about-box'
            style={{
                position: 'absolute',
                left: `${aboutObj.newPosition}px`,
                bottom: `${110 + calculateGroundHeight(aboutObj.newPosition)}px`,
                animation: 'coin-spin 2s linear infinite'
            }}
            size={50}
        />
    )
}

export default AboutObject
