import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="ml-4 mt-2 border-l-2 border-gray-300 pl-2">
      <p className="text-gray-700">{comment.text}</p>
    </div>
  );
};

export default Comment;
