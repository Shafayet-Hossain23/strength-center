import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCircleUser, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons'
import './User.css'
import { addToDb, getFromDb } from '../utilities/Utilities';

// ..toast..
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







const User = (props) => {
    const { selected } = props;
    let total = 0;
    for (const oneExercise of selected) {
        total = total + parseInt(oneExercise.time)
    }
    const breakTimeProcess = (id) => {
        const callId = document.getElementById(id);
        const callBreakTimeTextId = document.getElementById('break-time')
        const innerTextTime = callId.innerText;
        callBreakTimeTextId.innerText = innerTextTime
        addToDb(innerTextTime)
    }
    const getBreakTimeFromLs = getFromDb();
    // ..Toast..
    const notify = () => {
        toast("Welcome!")
    };

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
                <p className='fw-bold'>Add a Break(minitues)</p>
                <div className='break'>
                    <div>
                        <button onClick={() => breakTimeProcess('5m')} id='5m' className=' hover1 rounded-circle bg-white p-2 m-2'>05</button>
                    </div>
                    <div>
                        <button onClick={() => breakTimeProcess('10m')} id='10m' className=' hover1 rounded-circle bg-white p-2 m-2'>10</button>
                    </div>
                    <div>
                        <button onClick={() => breakTimeProcess('15m')} id='15m' className=' hover1 rounded-circle bg-white p-2 m-2'>15</button>
                    </div>
                    <div>
                        <button onClick={() => breakTimeProcess('20m')} id='20m' className=' hover1 rounded-circle bg-white p-2 m-2'>20</button>
                    </div>


                </div>
            </div>
            <div>
                <p className='mt-5 fw-bold'>Exercise details:</p>
                <p className='border-style p-2'><span className='me-5'>Exercise time:</span> <span className='me-4'>{total} </span>min</p>
                <p className='border-style p-2'><span className='me-5' >Break time:</span> <span id='break-time' className='me-4'>{getBreakTimeFromLs} </span>min</p>
            </div>
            <button onClick={notify} className='btn-complete p-2'>Acitivity Completed</button>
            <ToastContainer></ToastContainer>


        </div>
    );
};

export default User;