import React from "react";

import axios from 'axios'
import { useState, useEffect } from 'react'

const MemeCard = () => {
  const [data, setData] = useState(["empty"]);

  // const baseURL = "https://reqres.in/api/users";

  // const fetchData = () => {
  //   axios.get(baseURL).then((res) => {
  //     setData(res.data.data.map((item) => item.first_name));
  //   });
  // };

  // const baseURL = "https://reqres.in/api/users"
  // const baseURL = "https://jsonplaceholder.typicode.com/posts"
  const baseURL = "https://ufvry0vscj.execute-api.us-east-1.amazonaws.com/dev/clusters/summary/0/0"

  const fetchMemeCards = () => {
    // setData([]) //clear previous state
    // .all(baseURL, function(req, res, next) {
    //   res.header("Access-Control-Allow-Origin", "*");
    //   res.header("Access-Control-Allow-Headers", "X-Requested-With");
    //   next();
    // })

    axios
    .get(baseURL)
    .then(res => {
      // setData(res.data.data[0].first_name)
      // setData(res.data.data.map(item => item.first_name))
      // setData(res.data.map(item => item.title))
      // setData(res.data.map(item => item.init_title))
      setData(res)
      console.log(res)
    })
  }


  // const fetchMemeCards = async () => {
  //   try {
  //     const response = await axios.get(baseURL)
  //     setData(response.data)
  //   } catch (err) {
  //     console.log(err.response.data)
  //     console.log(err.response.status)
  //     console.log(err.response.headers)
  //   }
  // };

  return (
    <div>
      <div id="axios exercise" className="flex flex-col mb-72 border-2 h-auto">
        <span>{data}</span>
        <button
          type="button"
          className="bg-[lime] px-4 py-2 rounded w-32 mt-10"
          onClick={fetchMemeCards}
        >
          fetch data
        </button>
      </div>
    </div>
  );
};

export default MemeCard;
