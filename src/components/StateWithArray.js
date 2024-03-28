import React, { useState } from 'react';

const StateWithArray = () => {
     
    const [stateList, setStateList] = useState(['Maharashtra']);
    const [stateName, setStateName] = useState('');

    const changeStateName = (event) => {
        setStateName(event.target.value);
    }
    const addState = () => {
        setStateList(preList => ([...preList, stateName]));
    }
    return (
        <div>
            <p>{stateList}</p>
            <div className='row'>
                <div className='col-3'>
                    <input type='text' onChange={(event)=>{changeStateName(event)}} placeholder='Enter State' />
                </div>
                <div className='col-3'>
                    <input type='button' onClick={addState} value='Add State' />
                </div>
            </div>
        </div>
    );
};

export default StateWithArray;