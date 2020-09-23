import React, { Component } from 'react'
import {inject, observer} from 'mobx-react';

@inject('appState')
@observer
class TimerView extends React.Component {
    render() {
        console.log('render',this.props.appState.timer)
        return (
            <button onClick={this.onReset.bind(this)}>
                Seconds passed: {this.props.appState.timer}
            </button>
        );
    }

    componentDidUpdate(){
        console.log('componentDidUpdate',this.props.appState.timer)
    }

    onReset() {
        this.props.appState.resetTimer();
    }
};

export default TimerView