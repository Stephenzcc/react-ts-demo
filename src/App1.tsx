import React, { Component } from 'react'
import "./App1.css"

type Props = {}

type State = {
  num: number
}

export default class App1 extends Component<Props, State> {
  state = {
    num: 1
  }

  addNum() {
    this.setState({ num: this.state.num + 1 })
  }

  btnClick(num:number) {
    console.log(num);
  }

  render() {
    return (
      <div>
        <h1>类组件</h1>
        <h2>数字为:{this.state.num}</h2>
        <button onClick={() => this.setState({ num: this.state.num + 1 })}>按钮1 - 累加</button>
        <button onClick={this.addNum.bind(this)}>按钮2 - 累加</button>
        <button onClick={() => this.addNum()}>按钮3 - 累加</button>
        <div className='box'>
          <button onClick={this.btnClick.bind(this, 1)}>按钮1</button>
          <button onClick={this.btnClick.bind(this, 2)}>按钮2</button>
        </div>
      </div >
    )
  }
}