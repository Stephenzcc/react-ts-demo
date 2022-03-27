import React from "react";
// 配置images.d.ts文件，并在tsconfig.json的include中添加索引
import ErrorImg from "../assets/404.jpeg";
type Props = {};

const Page4 = (props: Props) => {
  return (
    <div>
      <img src={ErrorImg} alt="" />
    </div>
  );
};

export default Page4;
