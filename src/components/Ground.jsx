import React from 'react'

function Ground({calculateGroundHeight}) {

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
                        backgroundColor: 'black',
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