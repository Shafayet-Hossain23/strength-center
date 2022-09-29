import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWalking } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import './Exercises.css'
import Exercise from '../Exercise/Exercise';

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])
    return (
        <div className='exercises container'>
            <h4 className='default-color'>
                <FontAwesomeIcon icon={faWalking}></FontAwesomeIcon>
                <span className='fw-bolder ms-3 '>STRENGTH CENTER</span>
            </h4>
            <h5 className='mt-4 fw-semibold mb-4'>Select today's exercise</h5>
            <div className='exercises-container'>
                {
                    exercises.map((exercise) => <Exercise exercise={exercise}></Exercise>)
                }
            </div>

        </div>
    );
};

export default Exercises;