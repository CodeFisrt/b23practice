import React, { useState } from 'react';

const ConditionRendering = () => {
    const [isDiv1Visible,setDiv1] = useState(true);
    const [isDiv2Visible,setDiv2] = useState(true);

    const studentList = [
        {studid:11, isActive: false, name:'Sachin',city:'Mumbai',contact:'9988776655' },
        {studid:12, isActive: true, name:'Rahul',city:'Bhopal',contact:'1122334455' },
        {studid:13, isActive: false, name:'Ramesh',city:'Pune',contact:'3344556677' },
        {studid:14, isActive: false, name:'Aditya',city:'Mumbai',contact:'667788990' }
    ]

    const toggleDiv1 = (isVisiable) => {
        setDiv1(isVisiable)
    }
    const toggleDiv2 = () => {
        setDiv2(!isDiv2Visible)
    }
    return (
        <div className='pt-3'>
            <div className='row'>
                <div className='col-3'>
                    {
                        isDiv1Visible == true  &&   <div className='p-3 bg-success'>
                                        Div 1
                            </div>
                    }
                </div>
                <div className='col-3'>
                    {
                        isDiv2Visible && <div className='p-3 bg-danger'>
                            Div 2
                        </div>
                    }
                </div>
                <div className='col-3'>
                <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Sr</th>
                                <th>Name</th>
                                <th>City</th>
                                <th>Status</th>
                                <th>Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                studentList.map((student,index)=>{
                                    return (<tr>
                                        <td> {index+1 }</td>
                                        <td>{student.name}</td>
                                        <td>{student.city}</td>
                                        <td>
                                            {/* {
                                                student.isActive == true && <h6 className='text-primary'> Student IS Active</h6>
                                            }
                                            {
                                                student.isActive == false &&  <h6 className='text-danger'> Student Is De-Active</h6>
                                            } */}
                                            <h6 className={`${student.isActive?'text-primary':'text-danger'}`}>  {student.isActive ? 'Student IS Active' :'Student Is De-Active'} </h6>

                                        </td>
                                        
                                        <td>{student.contact}</td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='row pt-3'>
                <div className='col-3 text-center'>
                    <button className='btn btn-success' onClick={()=>{toggleDiv1(true)}}>Show Div1</button>
                    <button className='btn btn-danger mx-2' onClick={()=>{toggleDiv1(false)}}>Hide Div1</button>
                </div>
                <div className='col-3'>
                   <button className='btn btn-success' onClick={()=>{toggleDiv2()}}>Toggle</button>
                </div>
            </div>
        </div>
    );
};

export default ConditionRendering;