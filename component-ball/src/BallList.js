import React, { Component } from 'react'
import Ball from './Ball'
import { getRandom} from './utils'
/**
 *
 * 每隔一段时间自动渲染一个数组 
 * @export
 * @class BallList
 * @extends {Component}
 */
export default class BallList extends Component {
    constructor(props){
        super(props);
        this.state  ={
            ballInfo:[]
        }
       const timer =  setInterval(() => {
            var info = {
                left: getRandom(0,document.documentElement.clientWidth - 100),
                top: getRandom(0,document.documentElement.clientHeight - 100),
                xSpeed: getRandom(50,500),
                ySpeed:getRandom(50,500),
                bg:`rgb(${getRandom(0,255)},${getRandom(0,255)},${getRandom(0,255)})`

            }
            this.setState({
                ballInfo:[...this.state.ballInfo,info]
            })
            if(this.state.ballInfo.length>9){
                clearInterval(timer)
            }
        }, 1000);
        
    }
    render() {
    const balls = this.state.ballInfo.map((item,i)=> <Ball key={i} {...item} />)
        return (
            <>
                { balls}
            </>
        )
    }
}
