import React, { useState } from 'react';

const DynamicClass = () => {

    const div2ClassName  = 'bg-success';
    const [div1ClassName,setDiv1Class] = useState('bg-secondary');
    const [div3ClassName,setDiv3Class] = useState('');
    const [isActive,setIsActive] = useState(false);

    const addPrimaryClass = () => {
        setDiv1Class('bg-primary')
    }
    const addDangerClass = () => {
        setDiv1Class('bg-danger')
    }
    const chnageActive = (event) => {
        debugger;
        setIsActive(event.target.checked)
    }

    const changeDiv3Class = (event) => {
        setDiv3Class(event.target.value)
    }

    return (
        <div>
            <div className='row'>
                <div className='col-3'>
                    <div  className={`p-3 ${div1ClassName}`}>   div 1 </div>
                </div>
                <div className='col-3'>
                    <div className={`p-3 pt-2 ${div2ClassName}`}>   div 2   </div>
                </div>
                <div className='col-3'>
                    <div  className={`p-3 ${div3ClassName}`}>   div 3  </div>
                </div>
                <div className='col-3'>
                    <div  className={`p-3 ${isActive == true ? 'bg-success': 'bg-danger' }`}>  div 4  </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                     <button className='btn btn-primary' onClick={addPrimaryClass}>Add Primary Class</button>
                     <button className='btn btn-danger' onClick={addDangerClass}>Add Danger Class</button>
                </div>
                <div className='col-3'>
                    
                </div>
                <div className='col-3'>
                    <input type='text' onChange={(event)=>{changeDiv3Class(event)}}/>
                </div>
                <div className='col-3'>
                    <input type='checkbox' onChange={(event)=>{chnageActive(event)}} />
                </div>
            </div>
        </div>
    );
};

export default DynamicClass;