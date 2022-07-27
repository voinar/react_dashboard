import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const MemeCard = () => {
  const [data, setData] = useState(['empty']);

  // const baseURL = "https://reqres.in/api/users" // endpoint #1
  // const baseURL = "https://jsonplaceholder.typicode.com/posts/" // endpoint #2
  const baseURL = '/dev/clusters/summary/0/'; // endpoint #3

  const fetchMemeCards = () => {
    setData([]); //czyscimy poprzedni stan
    axios.get(baseURL).then((res) => {
      // setData(res.data.data.map(item => item.first_name)) // dziala z endpoint #1
      // setData(res.data.map(item => item.title)) // dziala z endpoint #2
      setData(res.data.map((item) => item.init_imgurl + ' ')); // dziala z endpint #3

      // setData(res)
      console.log(res);
    });
  };

  return (
    <div>
      <div id="meme-card" className="flex flex-col mb-72 border-2 h-auto">
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
