import React from 'react';

const unknowStyle = {
    // marginTop: '157px',
    marginTop: '157px',
    // marginLeft: '500px',
    marginLeft: '0px',
    // width: window.innerWidth - 777,
    padding: '0px',
    fontSize: '18px',
    color: 'black',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    textAlign: 'center',
};

export class PageUnknow extends React.Component {
    render() {
        return (
            <div style={unknowStyle}>
                <h1>Авторизуйтесь</h1>
                <p>root / root</p>
                <p>usr1 / usr1</p>
                <p>usr2 / usr2</p>
                <p>dev1 / dev1</p>
                <p>dev2 / dev2</p>
            </div>
        );
    }
}