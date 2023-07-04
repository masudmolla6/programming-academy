import React, { useEffect, useState } from 'react';
import image from '../../image/Gallery_1655011012433-removebg-preview.png'
import './Cart.css'
import { addToDb, getBreakTime } from '../utilities/fakeDb';


const Cart = ({ sub }) => {
    const [breakTime, setBreakTime] = useState(0);

    const addBreakBtn = (value) => {
        setBreakTime(value)
        addToDb(value);
    }

    useEffect(() => {
        const ldb = localStorage.getItem('break-time');
        const storedCart = JSON.parse(ldb);
        for (const time in storedCart) {
            setBreakTime(time);
        }
    },[breakTime])


    let time = 0;
    for (const item of sub) {
        time = time + item.time;
        // console.log(time);
    }


    return (
        <div className='cart-container'>
            <div className='about-container'>
                <div className='about-me'>
                    <img src={image} alt="" />
                    <div className='about'>
                        <h3>Masud Molla</h3>
                        <p>Dhaka,Bangladesh</p>
                    </div>
                </div>
                <div className="about-details">
                    <div className='details'>
                        <p>75<span>Kg</span></p>
                        <p>Weight</p>
                    </div>
                    <div className='details'>
                        <p>5.2</p>
                        <p>height</p>
                    </div>
                    <div className='details'>
                        <p>24<span>yrs</span></p>
                        <p>Age</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='title'>Add A Break</h2>
                <hr />
                <div className='add-break'>
                    <p onClick={()=>addBreakBtn(10)}>10</p>
                    <p onClick={()=>addBreakBtn(20)}>20</p>
                    <p onClick={()=>addBreakBtn(30)}>30</p>
                    <p onClick={()=>addBreakBtn(40)}>40</p>
                    <p onClick={()=>addBreakBtn(50)}>50</p>
                </div>
            </div>
            <div>
                <h2 className='title'>Practice Details</h2>
                <hr />
                <div className="calculate-area">
                    <div className="practice-time">
                        <h4>Practice Time:</h4>
                        <p>{time} <span>Hours</span></p>
                    </div>
                    <div className="break-time">
                        <h4>Break Time:</h4>
                        <p>{breakTime} <span>Min</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;