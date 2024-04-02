import React, { useState } from 'react';
import axios from 'axios';

const Photos = () => {
    const [userList, setUserList] = useState([])

    const getUser = async () =>{
        const result = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUserList(result.data);
    }

    return (
        <div>
            <ul>
                {
                    userList.map((user)=>{
                        return(<li>{user.name}</li>)
                    })
                }
            </ul>
             <button className='btn btn-success' onClick={getUser}> get Photos</button>
        </div>
    );
};

export default Photos;