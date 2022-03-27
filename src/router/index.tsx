/**
 * App > Home + List + Detail
 * react-router-dom中有两种模式：BrowserRouter(History模式) HashRouter(Hash模式)
 */

import App from "../App2";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 定义一个路由
const BaseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/page1" element={<Page1 />}></Route>
        <Route path="/page2/:id" element={<Page2 />}></Route>
        <Route path="/page3" element={<Page3 />}></Route>
      </Route>
      <Route path="*" element={<Page4 />}></Route>
    </Routes>
  </BrowserRouter>
);

export default BaseRouter;
