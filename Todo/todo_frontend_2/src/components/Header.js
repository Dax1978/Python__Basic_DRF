import React from 'react';
import { HeaderTitle } from './header/HeaderTitle';
import { HeaderNavigator } from './header/HeaderNavigator';

const headerStyle = {
    position: 'fixed',
    zIndex: 1,
    width: '100%',
    top: 0,
    left: 0,
};

export class Header extends React.Component {

    componentDidMount() {
        // console.log('Header props', this.props.auth);
    };

    componentDidUpdate() {
        // console.log('Header props после обновления', this.props.auth);
    }

    render() {
        return (
            <div style={headerStyle}>
                <HeaderTitle text='Горбунов Евгений Александрович' />
                <HeaderNavigator auth={this.props.auth} handleAuthChange={() => this.props.handleAuthChange(false)} />
            </div>
        );
    }
}