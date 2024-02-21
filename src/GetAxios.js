import React, { useEffect, useState } from "react";
import Axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

function GetAxios() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    Axios.get(baseURL).then((res) => {
      setData(res.data);
    });
  });
  return (
    <div>
      <h1>{Data.id}</h1>
      <h1>{Data.title}</h1>
      <h1>{Data.body}</h1>
    </div>
  );
}
export default GetAxios;
