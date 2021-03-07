import React from 'react';

class ReactComp extends React.Component {
    render() {
        return(
            <Test>
                <p>1</p>
                <p>2</p>
            </Test>
        );
    }
}

const Test = (props) => {
    console.log('props', props.children);
    console.log('props.children', React.Children.map(props.children, (c) => {
        return [c, [c, c]];
    }))
    return (
        <>
            {
                React.Children.map(props.children, (c) => {
                    return [c, [c, c]];
                })
            }
        </>
    );
}

export default ReactComp;