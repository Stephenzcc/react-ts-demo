// 仓库的入口文件
// 引入reducer
import reducer from "./reducer";
// 创建仓库
import { createStore } from "redux";

const store = createStore(reducer);

// 导出仓库
export default store;
