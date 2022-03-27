// 创建初始状态
const defaultState = {
  num: 1,
};

// 导出一个函数
const reducer = (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "addNum":
      newState.num += action.value;
      break;
    default:
      break;
  }
  // if (action.type === "addNum") {
  //   newState.num += action.value;
  // }
  return newState;
};

export default reducer;
