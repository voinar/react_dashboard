import React from 'react';
import { FiThumbsUp, FiThumbsDown, FiCalendar } from 'react-icons/fi';
import { CgWebsite } from 'react-icons/cg';
import { BiBrain, BiCommentDots } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import { FaTags } from 'react-icons/fa';
import { RiFilePaper2Line, RiShareForwardLine } from 'react-icons/ri';
import { VscDebugBreakpointDataUnverified } from 'react-icons/vsc';

import memeImg from '../data/meme-img.png';
import { Header } from '../components';
// import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";

const Overview = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Overview" />
    <div id="toolbar" className="">
      <ul className="flex gap-6">
        <li>Sort By</li>
        <li>Date Start</li>
        <li>Date End</li>
        <li>Upvotes</li>
        <li>Downvotes</li>
        <li>Score</li>
        <li>Comments</li>
        <li>Prediction</li>
      </ul>
    </div>
    <div className="memecard flex flex-col mt-8 p-4 bg-[#f3f4f6] rounded-lg gap-6 w-[700px]">
      <div className="flex gap-4">
        <span>#1</span>
        <img src={memeImg} className="rounded h-[600px]" />
        <div className="w-1/3">
          <div className="p-4 bg-[#ebecec] rounded">
            <div className="flex self-baseline">
              <div className="w-7">
                <FaTags />
              </div>
              <span className="text-xs font-bold">tags</span>
            </div>
            <span className="text-xs">
              Neil de Grasse-Tyson, telescope, universe, dank, normie
            </span>
          </div>
          <div className="p-4 bg-[#f9f9f9] rounded mt-2 border-1">
            <div className="flex">
              <div className="w-7">
                <FiCalendar />
              </div>
              <span className="text-xs font-bold">weekly trends</span>
            </div>
            <span className="text-xs">
              [chartArea]
              <br />
              [chartArea]
              <br />
              [chartArea]
              <br />
              [chartArea]
              <br />
            </span>
          </div>
          <div className="p-4 bg-[#f9f9f9] rounded mt-2 border-1 text-sm">
            <div className="flex flex-col gap-2">
              <div className="flex">
                <div className="w-7">
                  <CgWebsite size={20} />
                </div>
                <span>reddit, 9gag, 4chan</span>
              </div>
              <div className="flex self-baseline">
                <div className="w-7">
                  <BiBrain size={20} />
                </div>
                <span>predicted to grow</span>
              </div>
              <div className="flex">
                <div className="w-7">
                  <VscDebugBreakpointDataUnverified size={20} />
                </div>
                <span>9.4 mlx</span>
              </div>
              <div className="flex">
                <div className="w-7">
                  <AiOutlineEye size={20} />
                </div>
                <span>View versions</span>
              </div>
              <div className="flex">
                <div className="w-7">
                  <RiFilePaper2Line size={20} />
                </div>
                <span>View template</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-6">
          <div className="flex p-1">
            <div className="w-7">
              <FiThumbsUp size={24} />
            </div>
            <span>5,1k</span>
          </div>
          <div className="flex p-1">
            <div className="w-7">
              <FiThumbsDown size={24} />
            </div>
            <span>214</span>
          </div>
          <div className="flex bg-[#f8ffff] border-2 p-1 rounded">
            <div className="w-7">
              <BiCommentDots size={24} />
            </div>
            <span>Comments (12)</span>
          </div>
        </div>
        <div className="flex bg-[#fbffff] border-2 p-1 rounded">
          <div className="w-7">
            <RiShareForwardLine size={24} />
          </div>
          <span>Share</span>
        </div>
      </div>
    </div>
  </div>
);

export default Overview;
