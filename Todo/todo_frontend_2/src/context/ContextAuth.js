import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class ContextAuthProvider extends Component {
    state = {
        isAuth: false
    };

    toggleAuth = () => {
        this.setState(prevState => {
            return {
                isAuth: !prevState.isAuth
            };
        });
    };

    render() {
        return (
            <Provider value={{ isAuth: this.state.isAuth, toggleAuth: this.toggleAuth }} >
                {this.props.children}
            </Provider>
        );
    }
}

export { ContextAuthProvider, Consumer as ContextAuthConsumer };