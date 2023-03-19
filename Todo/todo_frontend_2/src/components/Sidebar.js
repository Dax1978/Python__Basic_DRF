import React from 'react';
import ProjectList from './project/ProjectList'

const sidebarStyle = {
    backgroundColor: '#2c2c2c',
    position: 'fixed',
    zIndex: 2,
    height: 'calc(100vh - 60px)',
    minWidth: '500px',
    top: '104px',
    left: 0,
};

const sidebarTitleStyle = {
    margin: '37px',
    fontSize: '32px',
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
};

export class Sidebar extends React.Component {

    render() {
        return (
            <div style={sidebarStyle}>
                <div style={sidebarTitleStyle}>Проекты</div>
                <ProjectList projects={this.props.projects} handleActualProject={this.props.handleActualProject} />
            </div>
        );
    }
}