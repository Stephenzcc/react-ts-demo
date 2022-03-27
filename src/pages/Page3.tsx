import React from "react";
import { useLocation } from "react-router-dom";
type Props = {};

const Page3: React.FC = ({}: Props) => {
  console.log(typeof useLocation());

  const location: any = useLocation();
  return <h2>详情页Detail - {location.state?.username || ""}</h2>;
};

export default Page3;
