import React from 'react';

const Child = React.forwardRef((props, ref) => {
    return (
        <input type="text" ref={ref} />
    );
})

export default class ForwardRefDemo extends React.Component {
    constructor() {
        super();
        this.objRef = React.createRef();
    }

    componentDidMount() {
        setTimeout(() => {
            this.objRef.current.value = 'objRef got';
        }, 1000)
    }

    render() {
        return (
            <Child ref={this.objRef} />
        );
    }
}

