import React, { useState } from 'react';

const StateWithObject = () => {

    const [studentObj,setStudentObj] = useState({name:'',email:'',city:''});

    const changeName = (event) => { 
        setStudentObj( prevObj => ( {...prevObj, name: event.target.value } ) )
    }
    const chanegEmail = (event)=>{
        setStudentObj( prevValue => ({...prevValue, email:event.target.value }) )
    }
    const changeCity = (event)=> {
        setStudentObj( prevObj=> ({...prevObj,city: event.target.value}))
    }

    const chnageFormValue = (event,filedName) => {
        setStudentObj( prevObj => ({...prevObj, [filedName] : event.target.value}))
    }


    return (
        <div>
            {studentObj.name} - {studentObj.email}- {studentObj.city}
            <div className='row'>
                {/* <div className='col-3'>
                    <input type='text' id='textName' onChange={ (event)=> { changeName(event) }}  placeholder='Entre Name'/>
                </div>
                <div className='col-3'>
                    <input type='text' onChange={(changeEvent)=>{chanegEmail(changeEvent)}} placeholder='Entre Email'/>
                </div>
                <div className='col-3'>
                    <input type='text' onChange={(event)=>{changeCity(event)}} placeholder='Entre City'/>
                </div> */}
                   <div className='col-3'>
                    <input type='text' id='textName' onChange={ (event)=> { chnageFormValue(event, 'name') }}  placeholder='Entre Name'/>
                </div>
                <div className='col-3'>
                    <input type='text' onChange={(event)=>{chnageFormValue(event, 'email')}} placeholder='Entre Email'/>
                </div>
                <div className='col-3'>
                    <input type='text' onChange={(event)=>{chnageFormValue(event,"city")}} placeholder='Entre City'/>
                </div>  
            </div>
        </div>
    );
};

export default StateWithObject;