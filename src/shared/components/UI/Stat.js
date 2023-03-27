import React from "react";
import { useSelector } from "react-redux";
import Avatar from "./Avatar";
const Stat = (props) => {
  const { userId } = useSelector((state) => state.auth);
  return (
    <div className="card flex flex-row m-2">
      <div className="w-4/12">
        <div className="w-full">
          <div className="font-extrabold text-2xl inline-block">Total Post</div>
          <div className="flex flex-row">
            <div className="w-6/12 text-2xl font-extrabold">
              {props.posts?.length}
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

      <div className="w-4/12">
        <div className="w-full">
          <div className="font-extrabold text-2xl inline-block">
            Total Friend
          </div>
          <div className="flex flex-row">
            <div className="w-6/12 text-2xl font-extrabold">
              {props.friends?.length}
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
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-6/12">
            {userId !== props.userPageId && !props.isFriend && (
              <button onClick={props.addFriend} className="btn btn-success">
                <span className="font-extrabold text-4lg inline-block">
                  Add Friend
                </span>
              </button>
            )}
            {userId !== props.userPageId && props.isFriend && (
              <button onClick={props.deleteFriend} className="btn btn-error">
                <span className="font-extrabold text-4lg inline-block">
                  Unfriend
                </span>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="w-4/12">
        <div className="flex flex-col">
          <div className="text-center">
            <Avatar image={props.image} className={"w-36"} />
          </div>
          <div className="font-extrabold text-2xl inline-block text-center">
            {props.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
