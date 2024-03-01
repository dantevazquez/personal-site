import React from 'react'
import { FaDog } from "react-icons/fa";

function Player({position, calculateGroundHeight, direction}) {
    return (
        <FaDog
            style={{
                transition: 'left 0.3s ease', // Smooth transition for left position
                position: 'absolute',
                left: `${position}px`,
                bottom: `${100 + calculateGroundHeight(position)}px`, // Adjust the stickman's position based on the ground height
                transform: direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)', // Flip the icon if direction is 'left'
            }}
            size={50}
        />
    )
}

export default Player
