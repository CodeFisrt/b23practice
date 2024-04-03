import React, { useState } from 'react';
import axios from 'axios';

const Patient = () => {

    const [patientList, setPatientList] = useState([]);
    const [patientObj, setPatientObj] = useState({
        "patientId": 0,
        "name": "",
        "mobileNo": "",
        "city": "",
        "age": 0,
        "gender": ""
      })

    const getAllPatient = async () => {
        const result = await axios.get("https://freeapi.gerasim.in/api/HospitalAppointment/GetAllPatients");
        setPatientList(result.data.data)
    }
    const createNewPatient =  async () => {
        debugger;
        const response =  await axios.post("https://freeapi.gerasim.in/api/HospitalAppointment/AddNewPatient",patientObj);
        debugger;
        if(response.data.result == true) {
            alert('Patient Created Success');
            getAllPatient();
        } else {
            alert(response.data.message)
        }
    }

    const uppdateFormValue = (event,key) => {
        setPatientObj(oldObj => ({...oldObj,[key]:event.target.value}))
    }

    return (
        <div>
            <button className='btn btn-sm btn-success' onClick={getAllPatient}>Get Patient</button>
            <div className='row'>
                <div className='col-8'>
                    <div className='card'>
                        <div className='card-header bg-primary'>
                            Patient List
                        </div>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Sr No</th>
                                        <th>Name</th>
                                        <th>Mobile</th>
                                        <th>City</th>
                                        <th>Gender</th>
                                        <th>Age</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        patientList.map((patient, index) => {
                                            return (<tr>
                                                <td> {index + 1}</td>
                                                <td> {patient.name}</td>
                                                <td>{patient.mobileNo}</td>
                                                <td>{patient.city}</td>
                                                <td>{patient.gender}</td>
                                                <td>{patient.age}</td>
                                            </tr>)
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='card'>
                        <div className='card-header bg-primary'>
                           New Patient
                        </div>
                        <div className='card-body'>
                            {JSON.stringify(patientObj)}
                                <div className='row'>
                                    <div className='col-6'>
                                        <label>Name</label>
                                        <input type='text' onChange={(event)=>{uppdateFormValue(event,'name')}} className='form-control' />
                                    </div>
                                    <div className='col-6'>
                                        <label>Mobile No</label>
                                        <input type='text' onChange={(event)=>{uppdateFormValue(event,'mobileNo')}} className='form-control' />
                                    </div>
                                    <div className='col-6'>
                                        <label>City</label>
                                        <input type='text' onChange={(event)=>{uppdateFormValue(event,'city')}} className='form-control' />
                                    </div>
                                    <div className='col-6'>
                                        <label>Age</label>
                                        <input type='text' onChange={(event)=>{uppdateFormValue(event,'age')}} className='form-control' />
                                    </div>
                                    <div className='col-6'>
                                        <label>Gender</label>
                                        <input type='text' onChange={(event)=>{uppdateFormValue(event,'gender')}} className='form-control' />
                                    </div> 
                                </div>
                                <div className='row'>
                                    <div className='col-12 text-center pt-3'>
                                        <button className='btn btn-success' onClick={createNewPatient}>Save Patient</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Patient;