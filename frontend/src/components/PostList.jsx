import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => {
  return (
    <div className="text-lime-100">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
