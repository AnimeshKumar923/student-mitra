import React, { useState } from 'react';
import HomePageLayout from './components/HomePage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

const HomePage = () => {
  return (
    <div>
      <HomePageLayout />
    </div>
  );
};

const LoginPage = () => {
  return (
    <div>
      <LoginForm/>
    </div>
  );
};


const SignupPage = () => {
  return (
    <div>
      <SignupForm/>
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <button onClick={() => setCurrentPage('home')}
      className='text-white ml-3 text-2xl'>Home</button>
      <button onClick={() => setCurrentPage('login')}
      className='text-white ml-3 text-2xl'>Login</button>
      <button onClick={() => setCurrentPage('signup')}
      className='text-white ml-3 text-2xl'>SignUp</button>

      {currentPage === 'home' && <HomePage />}
      {currentPage === 'login' && <LoginPage />}
      {currentPage === 'signup' && <SignupPage />}
    </div>
  );
};

export default App;
