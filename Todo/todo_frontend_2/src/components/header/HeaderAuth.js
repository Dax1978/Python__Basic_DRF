import React from 'react';
import { TextWhite } from '../base/TextWhite';
import ServiceAuth from '../../services/ServiceAuth';
import { ModalContext } from '../../context/ContextModalWindow';

const headerAuthButtonStyle = {
    // backgroundColor: '#20232a',
    // marginLeft: '17px',
    // marginRight: '17px',
    // padding: '0px',
    // minHeight: '57px',
    // alignItems: 'center',
    // justifyContent: 'space-between',
};

export class HeaderAuth extends React.Component {
    static contextModalWindow = ModalContext

    constructor(props) {
        super(props);
        this.state = {
            auth: this.props.auth,
            modalWindow: false,
        };
        this.onBtn = this.onBtn.bind(this);
    };

    // componentDidUpdate() {
    //     this.setState(() => { return { auth: this.props.auth } });
    // }
    // this.setState({ auth: this.props.auth });

    // const { modal: ModalWindow, open: openModalWindow, close: closeModalWindow } = this.context;

    onBtn() {
        const auth = ServiceAuth.isAuth();

        if (auth) {
            ServiceAuth.logout();
            this.props.handleAuthChange(false);
            window.location.href = "/";
        } else {
            window.location.href = "/auth";
        };
    };

    render() {
        // console.log('HeaderAuth', this.props.auth);

        const auth_usr = ServiceAuth.getCurrentUser();
        let greeting = '';
        this.props.auth ? greeting = 'Приветствую тебя ' + auth_usr.login : greeting = 'Приветствую тебя незнакомец';
        let btntext = '';
        this.props.auth ? btntext = 'logout' : btntext = 'login';
        return (

            <span style={headerAuthButtonStyle}>
                <TextWhite text={greeting} />
                <button
                    // className='rounded-full bg-red-300 text-white text-lg px-4 py-1 mx-7'
                    onClick={this.onBtn} style={{
                        borderWidth: '1px',
                        width: '117px',
                        marginLeft: '17px',
                        marginRight: '17px',
                        backgroundColor: 'rgb(55 65 81)',
                        border: 'none',
                        color: 'white',
                        padding: '7px 17px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        display: 'inline-block',
                        fontSize: '16px',
                    }}
                    data-hover="button">
                    <style>{`[data-hover="button"]:hover {background-color: rgb(148 163 184) !important;}`}</style>
                    {btntext}
                </button>
            </span >
        );
    }
}