import React from 'react';
import { TextWhite } from '../base/TextWhite';
import { HeaderAuth } from './HeaderAuth';

const headerNavigatorStyle = {
    backgroundColor: '#20232a',
    margin: '0px',
    padding: '0px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '57px',

};

export class HeaderNavigator extends React.Component {
    render() {
        console.log('props.auth HeaderNavigator:', this.props.auth)
        return (
            <div style={headerNavigatorStyle}>
                <TextWhite text={'ToDo by ©Dax'} />
                <TextWhite text={'ToDo by ©Dax'} />
                <HeaderAuth auth={this.props.auth} handleAuthChange={() => this.props.handleAuthChange(false)} />
            </div>
        );
    }
}