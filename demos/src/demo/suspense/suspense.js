import React, { Suspense, lazy } from 'react';

const LazyComp = lazy(() => import('./lazy'));

let data = '';
let promise = '';

function getData() {
    if (data) return data;
    if (promise) throw promise;
    promise = new Promise((resolve) => {
        setTimeout(()=> {
            data = '嘿嘿嘿';
            resolve();
        }, 2000)
    })
    throw promise;
}


const SuspenseComp = () => {
    const data = getData();
    return <p>{data}</p>
}


export default () => {
    return (
        <Suspense fallback="loading data">
            <SuspenseComp />
            <LazyComp />
        </Suspense>
    )
}