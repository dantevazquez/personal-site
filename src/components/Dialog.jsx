import React from 'react'
import { useNavigate } from 'react-router-dom';


function Dialog({ page, position, setShowDialog, calculateGroundHeight }) {
    const navigate = useNavigate();

    const handleYesClick = () => {
        setShowDialog(false);
        navigate(page);

    }
    const handleNoClick = () => {
        setShowDialog(false);
    }

    return (
        <div 
            style={{
                position: 'absolute',
                left: `${position - 128}px`,
                bottom: `${200 + calculateGroundHeight(position)}px`,
                height:'200px',
                width:'300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', 
            }}>
    
            <div>
                <p>Naviagte to {page}?</p>
                <div style={{textAlign: 'center'}}>
                    <button style={{cursor:'pointer'}} onClick={handleYesClick}>Yes</button>
                    <button style={{cursor:'pointer'}}onClick={handleNoClick}>No</button>
                </div>
            </div>
        </div>
    )
    
}

export default Dialog