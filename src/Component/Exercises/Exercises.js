import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWalking } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Exercises.css'

const Exercises = () => {
    return (
        <div className='exercises'>
            <h4 className='default-color'>
                <FontAwesomeIcon icon={faWalking}></FontAwesomeIcon>
                <span className='fw-bolder ms-3 '>STRENGTH CENTER</span>
            </h4>
            <h5 className='mt-4 fw-semibold'>Select today's exercise</h5>

        </div>
    );
};

export default Exercises;