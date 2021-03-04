import React, {useState} from 'react';

const globalText = React.createContext(null);
const Parent = () => {
    const [a, setA] = useState(1);
    const [b, setB] = useState(1000);
    return (
        <globalText.Provider value={{a, b, setA, setB}}>
            <div>a: {a}<input type="text" onChange={(e) => setA(e.target.value)}/></div>
            <div>b: {b}<input type="text" onChange={(e) => setB(e.target.value)}/></div>
            <Parent2 />
        </globalText.Provider>
    );
}

const Parent2 = () => {
    return (
        <div>
            <Child1 />
            <Child2 />
        </div>
    );
}

const Child1 = () => {
    const { a, setA} = React.useContext(globalText);
    return (
        <div onClick={() => setA(a + 1)}>{a}</div>
    );
}

const Child2 = () => {
    const { b, setB} = React.useContext(globalText);
    return (
        <div onClick={() => setB(b + 1)}>{b}</div>
    );
}

export default Parent;