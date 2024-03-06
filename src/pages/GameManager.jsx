import React, { useState, useEffect, useRef } from 'react';
import AboutObject from '../components/AboutObject';
import PortfolioObject from '../components/PortfolioObject';
import Player from '../components/Player';
import Ground from '../components/Ground';
import HomeInfo from '../components/HomeInfo';
import INFO from '../data/user';
import Dialog from '../components/Dialog';
import Fluff from '../components/Fluff';
import 'doodle.css/doodle.css'

const GameManager = ({ isMuted, position, setPosition, theme }) => {
    const halfScreenSize = window.innerWidth / 2;
    const stepSize = 10;
    const initialPosition = Math.round(halfScreenSize / stepSize) * stepSize;
    const [direction, setDirection] = useState('right');
    const [showDialog, setShowDialog] = useState(false);
    const [dialogPage, setDialogPage] = useState('');
    const collectAudio = new Audio(INFO.sounds.eating);
    const runAudio = new Audio(INFO.sounds.run);
    const touchInterval = useRef(null);
    const showDialogRef = useRef(showDialog);
    const maxDistance = 3500; //max distance user can walk

    //handles both touch and keyboard inputs
    const handleInput = (inputDirection) => {
        if (showDialogRef.current) {
            clearInterval(touchInterval.current);
            return;
        }
        setPosition((prevPos) => {
            if (inputDirection === 'left') {
                return Math.max(prevPos - stepSize, initialPosition);
            } else {
                return Math.min(prevPos + stepSize, maxDistance);
            }
        });
        setDirection(inputDirection);
        runAudio.play();
    };

    //helper functuon to handle touch
    const handleTouchStart = (e) => {
        e.preventDefault();
        const touchX = e.touches[0].clientX;
        if (touchInterval.current) {
            clearInterval(touchInterval.current);
        }
        const inputDirection = touchX < window.innerWidth / 2 ? 'left' : 'right';
        touchInterval.current = setInterval(() => handleInput(inputDirection), 100);
    };

    //helper functuon to handle touch release
    const handleTouchEnd = () => {
        if (touchInterval.current) {
            clearInterval(touchInterval.current);
            touchInterval.current = null;
        }
    };

    //this is just to prevent unwanted behavior from mobile browsers
    const handleTouchMove = (e) => {
        e.preventDefault();
    };

    //helper function to handle keyboard inputs
    const handleKeyPress = (e) => {
        if (showDialog) return;
        const keyToDirection = {
            'd': 'right',
            'ArrowRight': 'right',
            'a': 'left',
            'ArrowLeft': 'left'
        };
        const inputDirection = keyToDirection[e.key];
        if (inputDirection) {
            handleInput(inputDirection);
        }
    };

    //input listeners
    useEffect(() => {
        showDialogRef.current = showDialog;
        window.addEventListener('keydown', handleKeyPress);
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);
        window.addEventListener('touchmove', handleTouchMove);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [showDialog]);

    //detect collisions
    useEffect(() => {
        console.log("current pos", position);
        // Check each collision object
        INFO.collisionObjects.forEach(obj => {
            if (obj.positions.includes(position)) {
                // If player is walking towards the object
                if ((position === obj.positions[0] && direction === 'right') ||
                    (position === obj.positions[1] && direction === 'left')) {
                    setPosition(obj.newPosition);
                    setShowDialog(true);
                    setDialogPage(obj.dialogPage);
                    !isMuted ? collectAudio.play() : null;
                }
            }
        });
    }, [position]);

    // Function to calculate the y-value of the ground at a given x-position
    const calculateGroundHeight = (x) => {
        return 100 * Math.sin(x / 1000); // Adjust the amplitude and frequency 
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
                <Player
                    position={position}
                    calculateGroundHeight={calculateGroundHeight}
                    direction={direction}
                />
                <HomeInfo />
                {showDialog && <Dialog
                    page={dialogPage}
                    position={position}
                    setShowDialog={setShowDialog}
                    calculateGroundHeight={calculateGroundHeight}
                />}
                <Fluff />
            </div>

        </div>
    );
};
export default GameManager;
