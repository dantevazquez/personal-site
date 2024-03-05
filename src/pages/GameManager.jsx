import React, { useState, useEffect } from 'react';
import AboutObject from '../components/AboutObject';
import PortfolioObject from '../components/PortfolioObject';
import Player from '../components/Player';
import Ground from '../components/Ground';
import 'doodle.css/doodle.css'
import HomeInfo from '../components/HomeInfo';
import INFO from '../data/user';
import Dialog from '../components/Dialog';

const GameManager = ({ isMuted, position, setPosition, theme}) => {
    const halfScreenSize = window.innerWidth / 2; 
    const stepSize = 10; 
    const initialPosition = Math.round(halfScreenSize / stepSize) * stepSize;
    const [direction, setDirection] = useState('right');
    const [showDialog, setShowDialog] = useState(false);
    const [dialogPage, setDialogPage] = useState('');
    const collectAudio = new Audio(INFO.sounds.eating);

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
    useEffect(() => {
        console.log("current pos", position);
        //about object collision
        if (position === 990 || position === 1020) {
            console.log('Box 1 touched!');
            if (position === 990 && direction === 'right') {
                setPosition(1000);
                setShowDialog(true); 
                setDialogPage('about')
                console.log("ddd", isMuted)
                !isMuted ? collectAudio.play() : null;
            }
            else if(position === 1020 && direction === 'left'){
                setPosition(1000);
                setShowDialog('true');
                setDialogPage('about')
                !isMuted ? collectAudio.play() : null;
            }

            // portfolio object collision
        } else if (position === 1990 || position == 2020) {
            console.log('Box 2 touched!');
            if (position === 1990 && direction === 'right') {
                setPosition(2000);
                setShowDialog(true);
                setDialogPage('projects')
                !isMuted ? collectAudio.play() : null;
            }
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
        <div style={{ position: 'relative', height: '80vh', overflow: 'hidden'}}>

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

                {showDialog && <Dialog page={dialogPage} position={position} setShowDialog={setShowDialog} calculateGroundHeight={calculateGroundHeight}/>}

            </div>

        </div>

    );
};

export default GameManager;
