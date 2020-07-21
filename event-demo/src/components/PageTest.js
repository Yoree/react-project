import React, { Component } from 'react'
import Pager from './Pager'
export default class PageTest extends Component {
    state = {
        current:3,
        total:100,
        limit:10,
        panelNumber:5
    }
    handlPageChange = (newPage)=>{
        this.setState({
            current:newPage
        })
    }
    render() {
        return (
            <>
                <Pager {...this.state} onPageChange={this.handlPageChange}/>
            </>
        )
    }
}
