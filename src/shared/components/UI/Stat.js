import React from "react";
import Avatar from "./Avatar";
const Stat = (props) => {
  return (
    <div className="card flex flex-row m-2">
      <div className="w-1/4">
        <div className="w-full">
          <div className="font-extrabold text-2xl inline-block">Total Post</div>
          <div className="flex flex-row">
            <div className="w-6/12 text-2xl font-extrabold">
              {props.posts.length}
            </div>
            <div className="w-6/12">
              <svg
                className="w-12"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/4">
        <div className="w-full">ABC</div>
      </div>

      <div className="w-1/2">
        <div></div>
      </div>
    </div>
  );
};

export default Stat;
