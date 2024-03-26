import React from 'react';

const Variable = () => {
    let firstName = "Chetan"; 
    const lastName = "Jogi";
    const rollNo = 123;
    const isActive = false;
    const currentDate = new Date();

    const student = {
        name:'asdasd',
        city:'Pune',
        state: 'MH'
    }

    firstName = "Rahul";
     
    const cityList = ['Pune','mumabi','Thane']

    return (
        <div>
            <p> {firstName} </p>
            <p> { lastName}</p>
            <p> {rollNo}</p>
            <p> {isActive == true ? 'Active' : 'De-Active' }</p>
            <p> {currentDate.toString()}</p>
            <p> {student.name} {student.city} {student.state}</p>
            <p>{JSON.stringify(student)}</p>
            <p> {cityList}</p>
            <p> {JSON.stringify(cityList)}</p>
        </div>
    ); 
};

export default Variable;

 