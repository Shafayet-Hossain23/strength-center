import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faWalking } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const Exercises = () => {
    return (
        <div>
            <h4><FontAwesomeIcon icon={faWalking}></FontAwesomeIcon>
                STRENGTH CENTER
            </h4>
            <h5>Select today's exercise</h5>
        </div>
    );
};

export default Exercises;