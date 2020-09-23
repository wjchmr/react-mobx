import React, { Component } from 'react'

export default class Test extends Component {
    constructor(props){
        super(props)
        this.state= {
            data:props.data
        }
    }
    componentWillReceiveProps(nextprops){
        console.log(nextprops.data == this.props.data)
        if(nextprops.data != this.props.data){
            this.setState({
                data:nextprops.data
            })
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.data.map(item => <li>{item}</li>)}
                </ul>
            </div>
        )
    }
}
