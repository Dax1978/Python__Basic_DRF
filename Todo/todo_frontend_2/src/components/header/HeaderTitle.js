import React from 'react';
import { TextWhite } from '../base/TextWhite';

const headerTitleStyle = {
    backgroundColor: 'hsl(222, 14%, 10%)',
    margin: '0px',
    padding: '0px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '47px',

};

export class HeaderTitle extends React.Component {
    render() {
        const text = this.props.text;

        return (
            <div style={headerTitleStyle}>
                <TextWhite text={text} />
            </div>
        );
    }
}