import React, { useState } from 'react';
import HomePageLayout from './components/HomePage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import PostList from './components/PostList';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleGetStarted = () => {
    setCurrentPage('posts'); // Set current page to 'posts' when Get Started button is clicked
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex justify-center">
        <button onClick={() => setCurrentPage('home')} className="text-white ml-3 text-2xl">
          Home
        </button>
        <button onClick={() => setCurrentPage('login')} className="text-white ml-3 text-2xl">
          Login
        </button>
        <button onClick={() => setCurrentPage('signup')} className="text-white ml-3 text-2xl">
          SignUp
        </button>
      </div>

      <div className="mt-5">
        {currentPage === 'home' && <HomePageLayout onGetStarted={handleGetStarted} />}
        {currentPage === 'login' && <LoginForm />}
        {currentPage === 'signup' && <SignupForm />}
        {currentPage === 'posts' && <PostList />}
      </div>
    </div>
  );
};

export default App;
