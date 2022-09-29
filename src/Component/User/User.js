import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCircleUser, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons'
import './User.css'
const User = (props) => {
    const { selected } = props;
    let total = 0;
    for (const oneExercise of selected) {
        total = total + parseInt(oneExercise.time)
    }
    return (
        <div className='user' >
            <div >
                <p>
                    <FontAwesomeIcon className='userImage pt-5' icon={faCircleUser}></FontAwesomeIcon> <br />
                    <span>Md. Junayed Hossain</span>
                </p>
                <p>
                    <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                    <span className='ms-2'>Mirzapur,Bangladesh</span>
                </p>
            </div>
            <div className='user-info'>
                <div>
                    <p><span className='fw-bold'>75 </span>kg</p>
                    <p>Weight</p>

                </div>
                <div>
                    <p><span className='fw-bold'>6.5 </span>inch</p>
                    <p>Height</p>

                </div>
                <div>
                    <p><span className='fw-bold'>20 </span>yrs</p>
                    <p>Age</p>

                </div>


            </div>
            <div className='mt-5'>
                <p className='fw-bold'>Add a Break</p>
                <div className='break'>
                    <div className='hover1' >
                        <p className='rounded-circle bg-white p-2 m-2'>5m</p>
                    </div>
                    <div className='hover1'>
                        <p className='rounded-circle bg-white p-2 m-2'>10m</p>
                    </div>
                    <div className='hover1'>
                        <p className='rounded-circle bg-white p-2 m-2'>15m</p>
                    </div>
                    <div className='hover1'>
                        <p className='rounded-circle bg-white p-2 m-2'>20m</p>
                    </div>


                </div>
            </div>
            <div>
                <p className='mt-5 fw-bold'>Exercise details:</p>
                <p className='border-style p-2'><span className='me-5'>Exercise time:</span> <span className='me-4'>{total} </span>min</p>
                <p className='border-style p-2'><span className='me-5' >Break time:</span> <span className='me-4'>0 </span>min</p>
            </div>
            <button className='btn-complete p-2'>Acitivity Completed</button>

        </div>
    );
};

export default User;