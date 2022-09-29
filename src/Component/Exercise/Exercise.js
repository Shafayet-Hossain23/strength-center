import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const { exercise, addToListHandler } = props
    const { title, time, img, id } = props.exercise
    return (
        <div className='exercise'>
            <img src={img} alt="" />

            <div className='info'>
                <p className='fw-semibold'>{title} </p>
                <p>Time required: {time}m</p>
            </div>
            <button onClick={() => addToListHandler(exercise)} className="btn-list ps-5 pe-5 mb-2">Add to list</button>


        </div>
    );
};

export default Exercise;