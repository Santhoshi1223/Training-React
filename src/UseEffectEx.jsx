import React, { useEffect, useState } from 'react';

const UseEffectEx = () => {
    const [users, setUsers] = useState([]);

    console.log(users);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
            .catch(err => console.log(err)); // Fixed typo here
    }, []);

    return (
        <div className='parent'>
            <h2>UseEffect Example</h2>
            {
                users.map((user, index) => (
                    <React.Fragment key={index}>
                        <h1>{user.name}</h1>
                        <h3>{user.email}</h3>
                    </React.Fragment>
                ))
            }
        </div>
    );
};

export default UseEffectEx;
