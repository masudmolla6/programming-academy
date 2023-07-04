import React from 'react';

const Questions = () => {
    return (
        <div>
            <div>
                <h1>How does React Work?</h1>
                <p>React creates a VIRTUAL DOM in memory. Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM. React only changes what needs to be changed!</p>
            </div>
            <div>
                <h1>what is the difference between props and state?</h1>
                <p>Props are used to pass data from a parent component to a child component, while state is used to manage data within a component. Props are immutable and cannot be changed within a component, while state is mutable and can be updated using the setState function.</p>
            </div>
            <div>
                <h1>what is react useeffect used for without side effect?</h1>
                <p>1-Initializing variables: You can use useEffect to initialize variables or state variables when the component mounts, without performing any actions that would be considered side effects. 
                
                2-Subscribing to context or props changes: useEffect can be used to subscribe to changes in context values or props passed to a component, even if you don't have any side effects to perform. 
                    
                3-Cleanup tasks: useEffect can also be used for cleanup tasks when the component unmounts, even if there are no side effects during the component's lifecycle.
                </p>
            </div>
        </div>
    );
};

export default Questions;