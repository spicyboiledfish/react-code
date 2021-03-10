import React, { useState } from 'react';
import { unstable_batchedUpdates } from 'react-dom';

const BatchedUpdatesDemo = () => {
    const [number, setNumber] = useState(0);

    const btnClick = () => {
        //0 0 0
        countNumber();

        //0 0 0
        // setTimeout(()=> {
        //     countNumber();
        // }, 0)

        // 0 0 0
        // setTimeout(() => {
        //     unstable_batchedUpdates(() => countNumber())
        // }, 0)
    }

    const countNumber = () => {
        setNumber(1);
        console.log(number);
        setNumber(2);
        console.log(number);
        setNumber(3);
        console.log(number);
    }

    return(
        <button onClick={btnClick}>数字是: {number}</button>
    );
}

export default BatchedUpdatesDemo;