import React from "react";

const CommentItem = (props) => {
  return (
    <div className="card w-12/12 glass">
      <div className="flex p-4 border-b border-gray-200">
        <div className="mr-4 flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src={`http://localhost:5000/${props.image}`}
          />
        </div>
        <div className="w-full">
          <div className="flex items-center mb-2">
            <span className="font-bold mr-2">{props.name}</span>
            <span className="text-gray-500 text-sm">{props.email} </span>
          </div>
          <div className="mb-2">{props.content}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
