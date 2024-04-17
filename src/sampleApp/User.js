import React, { useState, useRef } from 'react';
import axios  from 'axios';

const User = () => {
    console.log("User Page Render")
    const [userList,setUserList] = useState([]);
    // const [userObj,setuserObj] = useState({
    //     name:'',
    //     city:'',
    //     mobile: '',
    //     username:''
    // });
    const name = useRef("");
    const userName = useRef("");
    const mobile = useRef("");
    const city = useRef("");

    const getUsers = async () =>{
        const response =  await axios.get("https://jsonplaceholder.typicode.com/users");
        debugger;
        setUserList(response.data) 
    }

    // const updateFormValue = (event,key)=> {
    //     setuserObj(obj=>({...obj,[key]:event.target.value}))
    // }
    const getFormValue = () =>{
        debugger;
        const userobj = {
            uName: name.current.value,
            city: city.current.value,
            mobile: mobile.current.value,
            username: userName.current.value
        }
        debugger;
    }
    return (
        <div>
            <button className='btn btn-success' onClick={getUsers}>Get All Users</button>
            <div className='row'>
                <div className='col-8'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Sr No</th>
                                <th>Name</th>
                                <th>User Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userList.map((user,index)=>{
                                    return(<tr>
                                        <td> {index +1}</td>
                                        <td> {user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className='col-4'>
                    <div className='row'>
                        <div className='col-6'>
                            <label>Name</label>
                            <input type='text' ref={name} className='form-control' />
                        </div>
                        <div className='col-6'>
                            <label>User Name</label>
                            <input type='text' ref={userName} className='form-control' />
                        </div>
                        <div className='col-6'>
                            <label>Mobile</label>
                            <input type='text'  ref={mobile}   className='form-control' />
                        </div>
                        <div className='col-6'>
                            <label>City</label>
                            <input type='text' ref={city}   className='form-control' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <button className='btn btn-primary' onClick={getFormValue}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default User;