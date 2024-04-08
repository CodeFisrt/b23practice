import React from 'react';

const MyLI = (props) => {
    debugger;
    return (
        <div>
            {/* <p>Title : {props.title}</p>
            <p>Start Date : {props.batchStartDate}</p> */}
            <ul>
                {
                    props.arrayData.map((item)=>{
                        return (<li>{item}</li>)
                    })
                } 
            </ul>
        </div>
    );
};

export default MyLI;