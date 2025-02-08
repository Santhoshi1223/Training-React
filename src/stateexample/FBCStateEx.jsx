import React, { useState } from 'react';

const FBCStateEx = () => {
    const [value, setValue] = useState(0);  // Corrected state declaration

    console.log(value);

    const changeValue = () => {
        setValue(1000);
    };

    return (
        <div>
            <h2>FBCStateEx</h2>
            <h1>{value}</h1>
            <button onClick={changeValue}>Change Value</button>
        </div>
    );
};

export default FBCStateEx;
