import React, { Component } from 'react'

export default class Tick extends Component {
    state = {
        left:this.props.number
    }
    constructor(props){
        super(props)
        this.timer = setInterval(() => {
            this.setState({
                // mixin
                left:this.state.left-1
            })
            if(this.state.left === 0){
                clearInterval(this.timer)
            }
        }, 1000);
    }
    render() {
        return (
            <div>
                倒计时剩余时间：{this.state.left}
            </div>
        )
    }
}
