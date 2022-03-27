import React from "react";
import { useParams } from "react-router-dom";
type Props = {};

function Page2({}: Props) {
  const { id } = useParams();
  return <h2>Page2 - {id}</h2>;
}

export default Page2;
