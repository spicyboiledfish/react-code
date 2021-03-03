import React, { Component, useEffect } from 'react';

class RefDemo extends React.Component {
    constructor(props) {
        super(props);
        this.objRef = React.createRef();
    }

    componentDidMount() {
        setTimeout(() => {
            this.refs.stringRef.textContent = 'string ref got';
            this.methodRef.textContent = 'method ref got';
            this.objRef.current.textContent = 'obj ref got';
        }, 1000)
    }

    render () {
        return (
            <div>
                <p ref="stringRef">span1</p>
                <p ref={ele => {this.methodRef = ele}}>span2</p>
                <p ref={this.objRef}>span3</p>
            </div>
        );
    }
    
}

export default RefDemo;