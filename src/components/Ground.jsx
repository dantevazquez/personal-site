import React from 'react'

function Ground({calculateGroundHeight, theme}) {

    const maxGameSize = 5000;

    const renderGround = () => {
        const ground = [];
        for (let i = 0; i < maxGameSize; i += 1) {
            ground.push(
                <div
                    style={{
                        position: 'absolute',
                        left: `${i}px`,
                        bottom: `${100 + calculateGroundHeight(i)}px`,
                        width: `4px`,
                        height: '4px',
                        borderRadius: '50px',
                        backgroundColor: theme === 'doodle' ? 'black' : 'white'
                    }}
                />
            );
        }
        return ground;
    };

    return (
        <>{renderGround()}</>
    )
}

export default Ground
