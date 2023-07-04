import React from 'react';
import './Subject.css'

const Subject = ({ subject, addToCartBtn }) => {
    const { id, name, picture, time } = subject;
    return (
        <div className='subject-cart'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h3>Time Requried: {time} <small>Hour</small></h3>
            <button className='add-btn' onClick={()=>addToCartBtn(subject)}>Addd To List</button>
        </div>
    );
};

export default Subject;