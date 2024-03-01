import React, { useState, useEffect } from 'react';
import AboutObject from '../components/AboutObject';
import PortfolioObject from '../components/PortfolioObject';
import Player from '../components/Player';
import Ground from '../components/Ground';
import 'doodle.css/doodle.css'
import HomeInfo from '../components/HomeInfo';

const GameManager = () => {
    const halfScreenSize = window.innerWidth / 2; // Half of the screen size
    const stepSize = 10; // How much the stickman moves per step
    const initialPosition = Math.round(halfScreenSize / stepSize) * stepSize;
    const [position, setPosition] = useState(initialPosition); // Stickman's position on the line
    const [direction, setDirection] = useState('right');

    // Handle arrow key presses
    const handleKeyPress = (e) => {
        if (e.key === 'd' || e.key === 'ArrowRight') {
            setPosition((prevPos) => prevPos + stepSize);
            setDirection('right');
        } else if (e.key === 'a' || e.key === "ArrowLeft") {
            // Prevent moving past the left screen boundary
            setPosition((prevPos) => Math.max(prevPos - stepSize, initialPosition));
            setDirection('left');
        }
    };

    // Attach event listener for arrow keys
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    // Check collision with boxes
    useEffect(() => {
        console.log("current pos", position);
        //about object collision
        if (position === 990 || position === 1040) {
            console.log('Box 1 touched!');
            if (position === 990) {
                setPosition(1050);
            }
            else {
                setPosition(980);
            }

            // portfolio object collision
        } else if (position === 1990 || position == 2040) {
            console.log('Box 2 touched!');
            if (position === 1990) {
                setPosition(2050);
            }
            else {
                setPosition(1980);
            }
        }
    }, [position]);

    // Function to calculate the y-value of the ground at a given x-position
    const calculateGroundHeight = (x) => {
        return 100 * Math.sin(x / 1000); // Adjust the amplitude and frequency as needed
    };
    return (
        <div style={{ position: 'relative', height: '80vh', overflow: 'hidden', backgroundColor: '#0094c6' }}>

            <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                bottom: 0,
                transform: `translateX(${halfScreenSize - position}px)` // Camera follows the stickman
            }}>
                <Ground calculateGroundHeight={calculateGroundHeight} />
                <AboutObject
                    calculateGroundHeight={calculateGroundHeight}
                />
                <PortfolioObject
                    calculateGroundHeight={calculateGroundHeight}
                />

                <Player position={position} calculateGroundHeight={calculateGroundHeight} direction={direction} />
                <HomeInfo/> 
            </div>
        </div>

    );
};

export default GameManager;
