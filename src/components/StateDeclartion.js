import React, { useState } from 'react';

const StateDeclartion = () => {

    const [firstName, setFirstName] = useState("Chetan");
    
    let [rollNo, setRollNo] = useState(123);

    const [isProductAvaialbele, setProductAvailabel] = useState(false);

    const [currentDate, setCurrentDate] = useState(new Date())

     
    return (
        <div>
            <p>{firstName}</p>
        </div>
    );
};

export default StateDeclartion;