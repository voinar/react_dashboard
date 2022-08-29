import React from 'react';

import { Header } from '../components';
import MemeCard from '../components/MemeCard';

// import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";

const Overview = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Overview" />
    <MemeCard />
    <div className=" bg-[#BBBBBB]">
      <div id="toolbar" className="">
        {/* <ul className="flex gap-6 justify-center text-sm">
          <li>Sort By</li>
          <li>Date Start</li>
          <li>Date End</li>
          <li>Upvotes</li>
          <li>Downvotes</li>
          <li>Score</li>
          <li>Comments</li>
          <li>Prediction</li>
        </ul> */}
      </div>
    </div>
  </div>
);

export default Overview;
