import React, { useState, useEffect, useRef } from 'react';
import AboutObject from '../components/AboutObject';
import PortfolioObject from '../components/PortfolioObject';
import Player from '../components/Player';
import Ground from '../components/Ground';
import 'doodle.css/doodle.css'
import HomeInfo from '../components/HomeInfo';
import INFO from '../data/user';
import Dialog from '../components/Dialog';
import Fluff from '../components/Fluff';

const GameManager = ({ isMuted, position, setPosition, theme }) => {
    const halfScreenSize = window.innerWidth / 2;
    const stepSize = 10;
    const initialPosition = Math.round(halfScreenSize / stepSize) * stepSize;
    const [direction, setDirection] = useState('right');
    const [showDialog, setShowDialog] = useState(false);
    const [dialogPage, setDialogPage] = useState('');
    const collectAudio = new Audio(INFO.sounds.eating);

    const touchInterval = useRef(null);

    // Handle touch start
    const handleTouchStart = (e) => {
        // Get the touch position
        e.preventDefault();
        const touchX = e.touches[0].clientX;
    
        // Clear any existing interval
        if (touchInterval.current) {
            clearInterval(touchInterval.current);
        }
    
        // Determine which half of the screen was touched
        if (touchX < window.innerWidth / 2) {
            // Left half of the screen was touched
            touchInterval.current = setInterval(() => {
                if (showDialog) {
                    clearInterval(touchInterval.current);
                    return;
                }
                setPosition((prevPos) => Math.max(prevPos - stepSize, initialPosition));
            }, 100); // Adjust the interval as needed
            setDirection('left');
        } else {
            // Right half of the screen was touched
            touchInterval.current = setInterval(() => {
                if (showDialog) {
                    clearInterval(touchInterval.current);
                    return;
                }
                setPosition((prevPos) => prevPos + stepSize);
            }, 100); // Adjust the interval as needed
            setDirection('right');
        }
    };
    
    // Handle touch end
    const handleTouchEnd = () => {
        // Clear the interval
        if (touchInterval.current) {
            clearInterval(touchInterval.current);
            touchInterval.current = null;
        }
    };
    
    const handleTouchMove = (e) => {
        e.preventDefault(); // This will prevent the default zoom/magnification effect
    };
    
    // Attach event listener for touch events
    useEffect(() => {
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);
        window.addEventListener('touchmove', handleTouchMove);
        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [showDialog]);
    // Handle arrow key presses
    const handleKeyPress = (e) => {
        if ((e.key === 'd' || e.key === 'ArrowRight') && !showDialog) {
            setPosition((prevPos) => prevPos + stepSize);
            setDirection('right');

        } else if ((e.key === 'a' || e.key === "ArrowLeft") && !showDialog) {
            // Prevent moving past the left screen boundary
            setPosition((prevPos) => Math.max(prevPos - stepSize, initialPosition));
            setDirection('left');
            console.log(isMuted);
        }
    };

    // Attach event listener for arrow keys
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [showDialog]);

    // Check collision with boxes
    //Dont judge, I had to hardcode beacause react is not a game engine and 
    //performance was getting rough with modularied code xD
    useEffect(() => {
        console.log("current pos", position);
        //about object collision
        if (position === 990 || position === 1020) {

            //if player is walking to the right
            if (position === 990 && direction === 'right') {
                setPosition(1000);
                setShowDialog(true); 
                setDialogPage('about')
                !isMuted ? collectAudio.play() : null;
            }
            //if player is walking to the left
            else if(position === 1020 && direction === 'left'){
                setPosition(1000);
                setShowDialog('true');
                setDialogPage('about')
                !isMuted ? collectAudio.play() : null;
            }

        // portfolio object collision
        } else if (position === 1990 || position == 2020) {
            //if player is walking to the right
            if (position === 1990 && direction === 'right') {
                setPosition(2000);
                setShowDialog(true);
                setDialogPage('projects')
                !isMuted ? collectAudio.play() : null;
            }
            //if player is walking to the left
            else if(position === 2020 && direction === 'left') {
                setPosition(2000);
                setShowDialog(true);
                setDialogPage('projects')
                !isMuted ? collectAudio.play() : null;
            }
        }
    }, [position]);


    // Function to calculate the y-value of the ground at a given x-position
    const calculateGroundHeight = (x) => {
        return 100 * Math.sin(x / 1000); // Adjust the amplitude and frequency as needed
    };
    return (
        <div style={{ position: 'relative', height: '80vh', overflow: 'hidden' }}>

            <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                bottom: 0,
                transform: `translateX(${halfScreenSize - position}px)`,
            }}>
                <Ground calculateGroundHeight={calculateGroundHeight} theme={theme} />
                <AboutObject
                    calculateGroundHeight={calculateGroundHeight}
                />
                <PortfolioObject
                    calculateGroundHeight={calculateGroundHeight}
                />

                <Player position={position} calculateGroundHeight={calculateGroundHeight} direction={direction} />
                <HomeInfo />

                {showDialog && <Dialog page={dialogPage} position={position} setShowDialog={setShowDialog} calculateGroundHeight={calculateGroundHeight} />}
                <Fluff />
            </div>

        </div>

    );
};

export default GameManager;
