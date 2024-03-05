import React from 'react'

function Fluff() {
    return (
        <div style={{
            position:'absolute',
            left: '3000px',
            top: '200px',      
        }}>
            <p>The function of the ground is: f(x)=100sin(x/1000)</p>
        </div>
    )
}

export default Fluff

// urn 100 * Math.sin(x / 1000); 