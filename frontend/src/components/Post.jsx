import React, { useState } from 'react';
import Comment from './Comment';

const Post = ({ post }) => {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');
  const [showComments, setShowComments] = useState(false);

  const handleAddComment = () => {
    if (newCommentText.trim() === '') {
      return; // Prevent adding empty comments
    }

    const newComment = {
      id: comments.length + 1, // Generate a unique ID (for demo purposes, use a better approach in production)
      text: newCommentText,
    };

    setComments([...comments, newComment]);
    setNewCommentText(''); // Clear the input field after adding comment
  };

  return (
    <div className="border border-gray-100 rounded p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">{post.title}</h2>
      <p className="text-white mb-2">{post.content}</p>

      {/* Button to Toggle Comments */}
      <button
        className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowComments(!showComments)}
      >
        {showComments ? 'Hide Comments' : 'View Comments'}
      </button>

      {/* Display Comments */}
      {showComments && (
        <div>
          {/* Comment Input and Add Button */}
          <div className="mt-4 mb-2">
            <textarea
              rows="3"
              className="w-full border rounded p-2"
              placeholder="Add a new comment..."
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
            ></textarea>
            <button
              onClick={handleAddComment}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Add Comment
            </button>
          </div>

          {/* Display Comments */}
          <div>
            {comments.length > 0 ? (
              comments.map((comment) => <Comment key={comment.id} comment={comment} />)
            ) : (
              <p className="text-gray-500">No comments yet.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
