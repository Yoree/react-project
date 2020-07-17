import React, { Component } from 'react'
import './ball.css'
/**
 * a ball can move ervey positon
 *
 * @export
 * @class Ball
 * @extends {Component}
 */
export default class Ball extends Component {
    constructor(props){
        super(props);
        // 属性中需要传递横纵坐标上的速度 每秒移动的像素值
        // props.xSpeed, props.ySpeed,bgColor
        this.state = {
            left: props.left || 0, 
            top: props.top || 0,
            xSpeed: props.xSpeed,
            ySpeed: props.ySpeed
        }
        const duration = 16;
        setInterval(()=>{
            const xDis = this.state.xSpeed * duration / 1000;
            const yDis = this.state.ySpeed * duration / 1000;
            let newLeft = this.state.left + xDis;
            let newTop = this.state.top + yDis;
            if(newLeft<= 0){
                newLeft = 0;
                this.setState({
                    xSpeed: -this.state.xSpeed
                })
            }else if(newLeft >= document.documentElement.clientWidth - 100){
                console.log(newLeft)
                newLeft = document.documentElement.clientWidth - 100
                this.setState({
                    xSpeed: -this.state.xSpeed
                })
            }
            

            if(newTop <= 0){
                newTop = 0;
                this.setState({
                    ySpeed: -this.state.ySpeed
                })
            }else if(newTop >= document.documentElement.clientHeight - 100){
                newTop = document.documentElement.clientHeight - 100
                this.setState({
                    ySpeed: -this.state.ySpeed
                })
            }
            this.setState({
                left: newLeft,
                top: newTop
            })
        },duration)
    }
    render() {
        return (
            <div className="ball" style={{
                left:this.state.left +'px',
                top:this.state.top +'px',
                background: this.props.bg || '#f40'
            }}>
                
            </div>
        )
    }
}
