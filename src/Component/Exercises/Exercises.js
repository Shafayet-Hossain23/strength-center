import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWalking } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import './Exercises.css'
import Exercise from '../Exercise/Exercise';
import User from '../User/User';
import Question from '../Bonus-section/question';

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    const [selected, setSelected] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])
    const addToListHandler = (selectedExercise) => {
        const newSelected = [...selected, selectedExercise];
        setSelected(newSelected)
    }
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-8'>
                        <div className='exercises container'>
                            <h4 className='default-color'>
                                <FontAwesomeIcon icon={faWalking}></FontAwesomeIcon>
                                <span className='fw-bolder ms-3 '>STRENGTH CENTER</span>
                            </h4>
                            <h5 className='mt-4 fw-semibold mb-4'>Select today's exercise</h5>
                            <div className='exercises-container'>
                                {
                                    exercises.map((exercise) => <Exercise exercise={exercise}
                                        addToListHandler={addToListHandler}
                                    ></Exercise>)
                                }
                            </div>
                        </div>


                    </div>
                    <div className='col-4'>
                        <User selected={selected}></User>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <Question></Question>
            </div>

        </div>


    );
};

export default Exercises;