import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCircleUser, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons'
import './User.css'
const User = () => {
    return (
        <div className='user'>
            <p>
                <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon> <br />
                <span>Md. Junayed Hossain</span>
            </p>
            <p>
                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                <span className='ms-2'>Mirzapur,Bangladesh</span>
            </p>

        </div>
    );
};

export default User;