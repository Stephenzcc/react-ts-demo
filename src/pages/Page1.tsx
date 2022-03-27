import React from "react";
import { useSearchParams } from "react-router-dom";
type Props = {};

function Page1({}: Props) {
  const [searchParams] = useSearchParams();
  let id = searchParams.getAll("id")[0];
  return <h2>Page1 - {id}</h2>;
}

export default Page1;
