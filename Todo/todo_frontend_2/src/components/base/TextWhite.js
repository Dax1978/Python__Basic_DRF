import React from 'react';

const spanStyle = {
    margin: '7px',
    padding: '0px',
    fontSize: '18px',
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
};

export class TextWhite extends React.Component {
    render() {
        const text = this.props.text;

        return (
            <span style={spanStyle}>{text}</span>
        );
    }
}