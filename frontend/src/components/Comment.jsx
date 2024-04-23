import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="ml-4 mt-2 border-l-2 border-gray-100 pl-2">
      <p className="text-white">{comment.text}</p>
    </div>
  );
};

export default Comment;
