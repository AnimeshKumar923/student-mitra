import React, { useState } from 'react';
import Comment from './Comment';

const Post = ({ post }) => {
  const [comments, setComments] = useState([]);

  const handleViewComments = () => {
    // Fetch comments for the selected post (e.g., from an API)
    // For demo purposes, using static comments
    setComments([
      { id: 1, text: 'First comment on the post.' },
      { id: 2, text: 'Second comment on the post.' },
    ]);
  };

  return (
    <div className="border border-gray-100 rounded p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">{post.title}</h2>
      <p className="text-white mb-2">{post.content}</p>
      <button
        className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded"
        onClick={handleViewComments}
      >
        View Comments
      </button>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Post;
