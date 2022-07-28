import axios from 'axios';
import { React, useState, useEffect } from 'react';

import { FiThumbsUp, FiThumbsDown, FiCalendar } from 'react-icons/fi';
import { CgWebsite } from 'react-icons/cg';
import { BiBrain, BiCommentDots } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import { FaTags } from 'react-icons/fa';
import { RiFilePaper2Line, RiShareForwardLine } from 'react-icons/ri';
import { VscDebugBreakpointDataUnverified } from 'react-icons/vsc';

const MemeCard = () => {
  const [memeCardData, setMemeCardData] = useState('');
  const baseURL = 'https://ufvry0vscj.execute-api.us-east-1.amazonaws.com/dev/clusters/summary';

  useEffect(async () => {
    const result = await axios(baseURL);
    setMemeCardData(result.data);
    // console.log(typeof(memeCardData));
  }, []);

  return (
    <div>
      { memeCardData === ''
        ? (<div id="meme-card" className="flex flex-col mb-72 h-auto"><h2>Loading...</h2></div>)
        : (
          <div id="meme-card" className="flex flex-col mb-72 h-auto">
            {memeCardData.map((memeCard, count) => (
              <div className="memecard flex flex-col mt-8 p-4 bg-[#f3f4f6] rounded-lg gap-6 max-w-[800px]" key={Number(memeCard.id_cluster)}>
                <div className="flex gap-4 justify-center">
                  <span>
                    <strong>#{count + 1}</strong>
                  </span>
                  <div className="flex flex-col">
                    {memeCard ? String(memeCard.init_title) : 'loading'}
                    <img
                      src={
                        memeCard ? String(memeCard.init_imgurl) : 'loading'
                      }
                      className="rounded max-h-[100%] max-w-[400px] self-center mt-4"
                    />
                  </div>

                  <div className="w-1/3 mt-10">
                    <div className="p-4 bg-[#ebecec] rounded">
                      <div className="flex self-baseline">
                        <div className="w-7">
                          <FaTags />
                        </div>
                        <span className="text-xs font-bold">tags</span>
                      </div>
                      <span className="text-xs">
                        {memeCard ? '[tag data]' : 'loading'}
                      </span>
                    </div>
                    <div className="p-4 bg-[#f9f9f9] rounded mt-2 border-1">
                      <div className="flex">
                        <div className="w-7">
                          <FiCalendar />
                        </div>
                        <span className="text-xs font-bold">
                          {memeCard
                            ? String(new Date(memeCard.init_publ_timestamp)).slice(0, 24)
                            : 'loading'};
                        </span>
                      </div>
                    </div>
                    <div className="p-4 bg-[#f9f9f9] rounded mt-2 border-1 text-sm">
                      <div className="flex flex-col gap-2">
                        <div className="flex">
                          <div className="w-7">
                            <CgWebsite size={20} />
                          </div>
                          <span>{memeCard ? 'seen on: ' : 'no data'}</span>
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
                        <div className="flex border-2 px-2 py-1 rounded">
                          <span>Popularity:&nbsp;</span>
                          <span>
                            {memeCard
                              ? String(memeCard.cluster_size)
                              : 'loading'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between px-6">
                  <div className="flex gap-6">
                    <div className="flex p-1">
                      <div className="w-7">
                        <FiThumbsUp size={24} />
                      </div>
                      <span>
                        {memeCard
                          ? String(memeCard.total_upvotes)
                          : 'loading'}
                      </span>
                    </div>
                    <div className="flex p-1">
                      <div className="w-7">
                        <FiThumbsDown size={24} />
                      </div>
                      <span>[no data]</span>
                    </div>
                    <div className="flex bg-[#f8ffff] border-2 px-2 py-1 rounded">
                      <div className="w-auto">
                        <BiCommentDots size={24} />
                      </div>
                      <span>&nbsp;Comments:&nbsp;</span>
                      <span>
                        {memeCard
                          ? String(memeCard.total_comments)
                          : 'loading'}
                      </span>
                    </div>
                  </div>
                  <div className="flex bg-[#fbffff] border-2 px-4 py-1 rounded">
                    <div className="w-7">
                      <RiShareForwardLine size={24} />
                    </div>
                    <span>Share</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
    </div>
  );
};

export default MemeCard;
