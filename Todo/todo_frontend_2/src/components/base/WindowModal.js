import React from 'react';

export class WindowModal extends React.Component {
    constructor(props) {
        super(props);
        this.children = props.children;
    };

    render() {
        return (
            <>
                <div style={{
                    backgroundAttachment: 'fixed',
                    backgroundColor: 'rgb(0 0 0)',
                    opacity: '0.5',
                    top: '0px',
                    right: '0px',
                    left: '0px',
                    bottom: '0px',
                }} />
                <div style={{
                    width: '0px',
                    padding: '1.25rem',
                    borderRadius: '0.25rem',
                    backgroundColor: '#fff',
                    position: 'absolute',
                    top: '10px',
                    left: '50%',
                    transform: '-translateX(50%)',
                }} >
                    <h1 style={{
                        fontSize: '1.5rem',
                        lineHeight: '2rem',
                        textAlign: 'center',
                        marginBottom: '0.5rem',
                        color: 'rgb(0 0 0)',
                    }} >Авторизация</h1>
                    {this.children}
                </div>
            </>
        )
    }
}