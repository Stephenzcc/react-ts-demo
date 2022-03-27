import React from 'react'
import { connect } from 'react-redux'

function UseRedux(props) {
  return (
    <div>
      <h2>数字为{props.num}</h2>
      <button onClick={() => props.add()}>累加</button>
    </div>
  )
}

// 状态映射：将reducer中的state映射成props，让开发者可以在组件中使用props.num去调用state中的num
const mapStateToProps = (state) => {
  return {
    num: state.num
  }
}

// 事件派发映射：将reducer中的事件映射成props，让开发者可以在组件中使用props.add()去实现num的累加
const mapDispatchToProps = (dispatch) => {
  return {
    add() {
      const action = { type: "addNum", value: 2 }
      dispatch(action)
    }
  }
}

// export default connect(state映射, dispatch映射)(当前组件名称) 
export default connect(mapStateToProps, mapDispatchToProps)(UseRedux) 
