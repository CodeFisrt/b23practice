import React, { useState } from 'react';
import axios from 'axios';
import MyLI from "../resuableComponent/MyLI";
import Alert from '../resuableComponent/Alert';

const Patient = () => {
    console.log("Patinet compo Rerender")
    const [patientList, setPatientList] = useState([]);
    const [patientObj, setPatientObj] = useState({
        "patientId": 0,
        "name": "",
        "mobileNo": "",
        "city": "",
        "age": 0,
        "gender": ""
    })

    const [errors, setErrors] = useState({});
    const getAllPatient = async () => {
        const result = await axios.get("https://freeapi.gerasim.in/api/HospitalAppointment/GetAllPatients");
        setPatientList(result.data.data)
    }

    const createNewPatient = async () => {
        debugger;
        const response = await axios.post("https://freeapi.gerasim.in/api/HospitalAppointment/AddNewPatient", patientObj);
        debugger;
        if (response.data.result == true) {
            alert('Patient Created Success');
            getAllPatient();
        } else {
            alert(response.data.message)
        }
    }

    const uppdateFormValue = (event, key) => {
        setPatientObj(oldObj => ({ ...oldObj, [key]: event.target.value }))
    }

    const updateFormObject = (eventObj) => {
        const { name, value } = eventObj.target;
        setPatientObj(oldObj => ({ ...oldObj, [name]: value }))
        debugger;
    }
    const onEdit = (obj) => {
        setPatientObj(obj)
    }
    const updatedPatient = async () => {
        const response = await axios.put("https://freeapi.gerasim.in/api/HospitalAppointment/UpdatePatient", patientObj);
        debugger;
        if (response.data.result == true) {
            alert('Patient Updated Success');
            getAllPatient();
            setPatientObj({
                "patientId": 0,
                "name": "",
                "mobileNo": "",
                "city": "",
                "age": 0,
                "gender": ""
            })
        } else {
            alert(response.data.message)
        }
    }
    const onDelete = async (patientId) => {
        const response = await axios.delete("https://freeapi.gerasim.in/api/HospitalAppointment/DeletePatientByPatienId?patientId=" + patientId);
        debugger;
        if (response.data.result == true) {
            alert('Patient Delete Success');
            getAllPatient();
        } else {
            alert(response.data.message)
        }
    }
    const [alertType, setAlertType] = useState("Danger");

    const handleSubmit = (e) => {
        e.preventDefault();
        debugger;
        const newErrors = {};
        if (!patientObj.name.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!patientObj.mobileNo.trim()) {
            newErrors.mobileNo = 'mobileNo is required';
        } else if (!/\S+@\S+\.\S+/.test(patientObj.mobileNo)) {
            newErrors.mobileNo = 'mobileNo is invalid';
        }
        if (!patientObj.city.trim()) {
            newErrors.city = 'city is required';
        } else if (patientObj.city.length < 6) {
            newErrors.city = 'city must be at least 6 characters';
        }

        // If there are errors, set them and return
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        if(Object.keys(newErrors).length  == 0) {
            setErrors({})
        }

    }
    const cityList = ['Pune', 'Nagpur', 'Mumbai']
    return (
        <div>
            <Alert alertType={alertType} message="Check For Errors" className="alert-danger"></Alert>

            <button className='btn btn-sm btn-success' onClick={getAllPatient}>Get Patient</button>
            <button className='btn btn-sm btn-success' onClick={() => { setAlertType('Success') }}>Change Alert Type</button>
            <div className='row'>
                <div className='col-3'>
                    <MyLI arrayData={cityList} batchStartDate="'23-march-23'" title="'Welcome b-23'"></MyLI>
                </div>
            </div>
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
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        patientList.map((patient, index) => {
                                            return (<tr key={patient.patientId}>
                                                <td> {index + 1}</td>
                                                <td> {patient.name}</td>
                                                <td>{patient.mobileNo}</td>
                                                <td>{patient.city}</td>
                                                <td>{patient.gender}</td>
                                                <td>{patient.age}</td>
                                                <td>
                                                    <button className='btn btn-success' onClick={() => { onEdit(patient) }}>Edit </button>
                                                    <button className='btn btn-danger mx-2' onClick={() => { onDelete(patient.patientId) }}>Delete </button>
                                                </td>
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
                            {JSON.stringify(errors)}
                            <form onSubmit={handleSubmit}>
                                <div className='row'>
                                    <div className='col-6'>
                                        <label>Name</label>
                                        <input type='text' value={patientObj.name} name='name' onChange={(event) => { updateFormObject(event) }} className='form-control' />
                                        {
                                            errors.name  && <span className='text-danger'>{errors.name}</span>
                                        }
                                    </div>
                                    <div className='col-6'>
                                        <label>Mobile No</label>
                                        <input type='text' value={patientObj.mobileNo} name='mobileNo' onChange={(event) => { updateFormObject(event) }} className='form-control' />
                                        {
                                            errors.mobileNo  && <span className='text-danger'>{errors.mobileNo}</span>
                                        }
                                    </div>
                                    <div className='col-6'>
                                        <label>City</label>
                                        <input type='text' value={patientObj.city} name='city' onChange={(event) => { updateFormObject(event) }} className='form-control' />
                                        {
                                            errors.city  && <span className='text-danger'>{errors.city}</span>
                                        }
                                    </div>
                                    <div className='col-6'>
                                        <label>Age</label>
                                        <input type='text' value={patientObj.age} name='age' onChange={(event) => { updateFormObject(event) }} className='form-control' />
                                    </div>
                                    <div className='col-6'>
                                        <label>Gender</label>
                                        <input type='text' value={patientObj.gender} name='gender' onChange={(event) => { updateFormObject(event) }} className='form-control' />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12 text-center pt-3'>
                                        <button type='submit' className='btn btn-success'>Save Patient</button>
                                        <button className='btn btn-primary' onClick={updatedPatient}>Update Patient</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Patient;