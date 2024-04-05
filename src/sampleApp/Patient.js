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
    const onEdit = (obj) => {
        setPatientObj(obj)
    } 
    const updatedPatient = async () => {
        const response =  await axios.put("https://freeapi.gerasim.in/api/HospitalAppointment/UpdatePatient",patientObj);
        debugger;
        if(response.data.result == true) {
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
        const response =  await axios.delete("https://freeapi.gerasim.in/api/HospitalAppointment/DeletePatientByPatienId?patientId=" +patientId);
        debugger;
        if(response.data.result == true) {
            alert('Patient Delete Success');
            getAllPatient();
        } else {
            alert(response.data.message)
        }
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
                                        <th>Action</th>
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
                                                <td>
                                                    <button className='btn btn-success' onClick={()=>{onEdit(patient)}}>Edit </button>
                                                    <button className='btn btn-danger mx-2' onClick={()=>{onDelete(patient.patientId)}}>Delete </button>
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
                            {JSON.stringify(patientObj)}
                                <div className='row'>
                                    <div className='col-6'>
                                        <label>Name</label>
                                        <input type='text' value={patientObj.name} onChange={(event)=>{uppdateFormValue(event,'name')}} className='form-control' />
                                    </div>
                                    <div className='col-6'>
                                        <label>Mobile No</label>
                                        <input type='text' value={patientObj.mobileNo} onChange={(event)=>{uppdateFormValue(event,'mobileNo')}} className='form-control' />
                                    </div>
                                    <div className='col-6'>
                                        <label>City</label>
                                        <input type='text' value={patientObj.city} onChange={(event)=>{uppdateFormValue(event,'city')}} className='form-control' />
                                    </div>
                                    <div className='col-6'>
                                        <label>Age</label>
                                        <input type='text' value={patientObj.age} onChange={(event)=>{uppdateFormValue(event,'age')}} className='form-control' />
                                    </div>
                                    <div className='col-6'>
                                        <label>Gender</label>
                                        <input type='text' value={patientObj.gender} onChange={(event)=>{uppdateFormValue(event,'gender')}} className='form-control' />
                                    </div> 
                                </div>
                                <div className='row'>
                                    <div className='col-12 text-center pt-3'>
                                        <button className='btn btn-success' onClick={createNewPatient}>Save Patient</button>
                                        <button className='btn btn-primary' onClick={updatedPatient}>Update Patient</button>
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