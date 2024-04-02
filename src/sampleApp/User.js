import React, { useState } from 'react';
import axios  from 'axios';

const User = () => {
    const [userList,setUserList] = useState([]);

    const getUsers = async () =>{
        const response =  await axios.get("https://jsonplaceholder.typicode.com/users");
        debugger;
        setUserList(response.data) 
    }

    return (
        <div>
            <button className='btn btn-success' onClick={getUsers}>Get All Users</button>
            <div className='row'>
                <div className='col-6'>
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
            </div>
            
        </div>
    );
};

export default User;