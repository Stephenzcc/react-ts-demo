import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useRef,
  memo,
  useCallback,
  useMemo,
} from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
type Props = {};

// 创建上下文空间
const NumContext = createContext<{ num?: number; setNum?: Function }>({});
const msg: string = "函数组件";
const myStyle = { backgroundColor: "skyblue" };
let flag: boolean = true;
let arr: string[] = ["第一行", "第二行", "第三行"];

// 顶级组件
export default function App2({}: Props) {
  // hook只能用在组件函数中的最顶层
  const [num, setNum] = useState<number>(1);

  // 模拟mounted，一般在这个位置写ajax
  useEffect(() => {
    console.log("挂载完成");
  });
  // 检测数据更新，数组中为要检测的数据，不写为全部
  useEffect(() => {
    console.log("num更新了");
  }, [num]);
  // 模拟beforeDestroy，一般在这个阶段处理脏数据和垃圾回收
  useEffect(() => {
    return () => {
      console.log("销毁阶段");
    };
  });

  return (
    <>
      <h1>{msg}</h1>
      <hr />
      <label htmlFor="username">用户名:</label>
      <input type="text" id="username" />
      <hr />
      <div style={{ backgroundColor: flag ? "pink" : "skyblue" }}>内容</div>
      <div style={myStyle}>内容</div>
      <hr />
      <ul>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr />
      <NumContext.Provider value={{ num, setNum }}>
        <Father {...{ num: num, setNum: setNum }}></Father>
      </NumContext.Provider>
      <hr />
    </>
  );
}

// 父组件
const Father: React.FC<{ num: number; setNum: Function }> = (props) => {
  const [num, setNum] = [props.num, props.setNum];
  const [value, setValue] = useState("asd");
  const element = useRef<HTMLInputElement>(null);
  // const doSth = () => {};
  const doSth = useCallback((): void => {
    if (num && setNum) {
      setNum((num: number) => num + 1);
    }
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.pathname)
  const goDetail = () => {
    navigate("./page3", {
      state: { username: "张三" },
    });
  };

  return (
    <>
      <Child doSth={doSth}></Child>
      <h2>{props.num}</h2>
      <button onClick={() => props.setNum(456)}>修改num</button>
      <hr />
      <h3>受控组件</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => console.log(value)}>获取input的值</button>
      <hr />
      <h3>不受控组件</h3>
      <input type="text" ref={element} />
      <button onClick={() => console.log(element.current?.value)}>
        获取input的值
      </button>
      <hr />
      <ul>
        <li>
          <Link to="/page1?id=456">首页</Link>
        </li>
        <li>
          <Link to="/page2/123">列表页</Link>
        </li>
        <li>
          <Link to="/page3">详情页</Link>
        </li>
      </ul>
      <button onClick={goDetail}>跳转详情页</button>
      <hr />
      <Outlet />
    </>
  );
};
// 子组件
const Child: React.FC<{ doSth: Function }> = memo((props) => {
  const { num, setNum } = useContext(NumContext);

  return (
    <>
      <h2>数字1为:{num}</h2>
      <button onClick={() => props.doSth()}>累加</button>
    </>
  );
});
