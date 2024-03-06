import React from 'react'
import { FaDog } from "react-icons/fa";

function Player({position, calculateGroundHeight, direction}) {
    return (
        <FaDog
            style={{
                // Smooth transition for left position
                transition: 'left 0.3s ease', 
                position: 'absolute',
                left: `${position}px`,
                // Adjust the plauyers position based on the ground height
                bottom: `${100 + calculateGroundHeight(position)}px`, 
                // Flip the icon if direction is 'left'
                transform: direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)', 
            }}
            size={50}
        />
    )
}
export default Player
