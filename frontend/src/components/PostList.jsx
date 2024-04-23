import React, { useState } from 'react';

const PostList = () => {
  const [posts] = useState([
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
  ]);

  // State to manage comments
  const [comments, setComments] = useState({});
  const [newCommentText, setNewCommentText] = useState('');

  const handleAddComment = (postId) => {
    if (newCommentText.trim() === '') {
      return; // Prevent adding empty comments
    }

    const newComment = {
      id: Date.now(), // Use a unique ID (e.g., timestamp) for the comment
      text: newCommentText,
    };

    // Update comments state for the specific post
    setComments({
      ...comments,
      [postId]: [...(comments[postId] || []), newComment],
    });

    // Clear the input field after adding comment
    setNewCommentText('');
  };

  return (
    <div className="text-lime-900">
      {posts.map((post) => (
        <div key={post.id} className="border border-gray-100 rounded p-4 mb-4">
          <h2 className="text-lg font-bold mb-2">{post.title}</h2>
          <p className="text-white mb-2">{post.content}</p>

          {/* Comment Input and Add Button */}
          <div className="mb-2">
            <textarea
              rows="3"
              className="w-full border rounded p-2"
              placeholder="Add a new comment..."
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
            ></textarea>
            <button
              onClick={() => handleAddComment(post.id)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Add Comment
            </button>
          </div>

          {/* Display Comments for the current post */}
          {comments[post.id] && (
            <div>
              <h3 className="text-lg font-bold mb-2">Comments:</h3>
              {comments[post.id].map((comment) => (
                <div key={comment.id} className="bg-gray-200 rounded p-2 mb-2">
                  <p className="text-sm text-black">{comment.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
