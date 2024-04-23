import React, { useState } from 'react';
import PostList from './PostList';

const HomePage = () => {
  const [showPosts, setShowPosts] = useState(false);
  const [posts] = useState([
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
  ]);

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-zinc-800 mb-4">StudentMitra</h1>
        <p className="text-lg text-yellow-100">Platform to ask, learn and connect with your peers and seniors.</p>
        <button
          className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => setShowPosts(true)}
        >
          Get Started
        </button>
      </div>

      {/* Display PostList when showPosts is true */}
      {showPosts && <PostList posts={posts} />}
    </div>
  );
};

export default HomePage;