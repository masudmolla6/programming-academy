import React, { useEffect, useState } from 'react';
import Subject from '../Subject/Subject';
import './Frontend.css'
import Header from '../Header/Header';
import Cart from '../Cart/Cart';


const Frontend = () => {
    const [subjects, setSubjects] = useState([]);
    const [sub, setSub] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
        
    }, [])
    
    const addToCartBtn = (clickSubject) => {
        // console.log(clickSubject);
        const newSub = [...sub, clickSubject];
        setSub(newSub);
    }
    return (
        <div className='container'>
            <div>
                <Header></Header>
                <div className='subjects-area'>
                    <h1>Select Todays's Practice</h1>
                    <div className="subject-container">
                        {
                            subjects.map(subjec => <Subject
                                key={subjec.id}
                                subject={subjec}
                                addToCartBtn={addToCartBtn}
                            ></Subject>)
                        }
                    </div>
                </div>
            </div>
            <div className="cart-container">
                <Cart sub={sub}></Cart>
            </div>
        </div>
    );
};

export default Frontend;