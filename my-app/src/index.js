import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Test from './test'
import ChangeProps from './changeProps'
import SwiperImg from './swiperImg'



class LikeButton extends Component {
  constructor () {
    super()
    this.state = {
      isLiked: false
    }
  }

  handleClickOnLikeButton () {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }


  render () {
    const wordings = this.props.wordings || {
      likedText: '取消',
      unlikedText: '点赞'
    }
    return (
    <button onClick={this.handleClickOnLikeButton.bind(this)}> {this.state.isLiked ? wordings.likedText : wordings.unlikedText} 👍</button>
    )
  }
}




class Index extends Component{
  render(){
    
    return(
      <div>
        {/* <ChangeProps />
        <App/>
        <Test />
        <LikeButton
          wordings={{likedText: '已赞', unlikedText: '赞'}}
          onClick={() => console.log('Click on like button!')}/> */}
          <SwiperImg />
      </div>
    )
  }
}
ReactDOM.render(
  <Index />,
  document.getElementById('root')
)