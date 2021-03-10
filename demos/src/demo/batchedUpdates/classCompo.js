import React from 'react';
import { unstable_batchedUpdates } from 'react-dom';

class BatchedUpdatesDemo2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    btnClick = () => {
        // 0 0 0
        // this.countNumber();

        // 1 2 3
        setTimeout(() => {
            this.countNumber();
        }, 0)

        // 0 0 0 
        // setTimeout(() => {
        //     unstable_batchedUpdates(() => this.countNumber());
        // }, 0)
    }

    countNumber = () => {
        const number = this.state.number;
        this.setState({
            number: number + 1
        })
        console.log(this.state.number);
        this.setState({
            number: number + 2
        })
        console.log(this.state.number);
        this.setState({
            number: number + 3
        })
        console.log(this.state.number);
    }

    render() {
        return (
            <button onClick={this.btnClick}>按钮{this.state.number}</button>
        );
    }
}

export default BatchedUpdatesDemo2;