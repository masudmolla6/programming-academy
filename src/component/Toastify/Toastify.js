import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {
    const notify = () => toast("Successfull");
    return (
        <div>
            <button onClick={notify}>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Toastify;