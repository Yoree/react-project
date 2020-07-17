import React, { Component } from 'react'
import Tick from "./Tick";

export default class TickControl extends Component {
    state = {
        isOver:false
    }
    handlOver = ()=>{
        this.setState({
            isOver: true
        })
    }
    render() {
        let statue = '正在倒计时'
        if(this.state.isOver){
            statue = '倒计时完成'
        }
        return (
            <div>
                <Tick onOver={this.handlOver} number={10}></Tick>
                <h5>
                    {statue}
                </h5>
            </div>
        )
    }
}
