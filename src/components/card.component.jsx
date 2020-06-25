import React from 'react';

const Card = () => {
  return (
    <div className="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3">
      <img
        alt=""
        src="https://source.unsplash.com/random/400x200"
        className="w-full"
      />
      <div className="border shadow">
        <div className="flex justify-center -mt-8">
          <img
            src="https://i.imgur.com/8Km9tLL.jpg"
            alt=""
            className="rounded-full border-solid border-white border-2 -mt-3"
          />
        </div>

        <div className="text-center px-3 pb-6 pt-2">
          <h3 className="text-black text-sm bold font-sans">Olivia Dunham</h3>
          <p className="mt-2 font-sans font-light text-grey-dark">@oligirl</p>
        </div>
        <div className="flex justify-center pb-3 text-grey-dark">
          <div className="text-center mr-3 border-r pr-3">
            <h2>FE</h2>
            <span>Track</span>
          </div>
          <div className="text-center">
            <h2>34</h2>
            <span>Scores</span>
          </div>
        </div>
        <div className="px-6 py-4 flex justify-center">
          <span className="iline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            twitter
          </span>
          <span className="iline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            LinkedIn
          </span>
          <span className="iline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Github
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
