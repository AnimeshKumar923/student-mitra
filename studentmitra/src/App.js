import React, { useState } from 'react';
import QuestionList from './components/QuestionList';
import QuestionForm from './components/QuestionForm';
import 'semantic-ui-css/semantic.min.css'
import LoginForm from './components/LoginLayout';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleQuestionSubmit = (newQuestion) => {
    setQuestions([...questions, { ...newQuestion, id: questions.length + 1 }]);
  };

  const handleLogin = () => {
    // Perform login logic (e.g., validate credentials)
    // For simplicity, assume login is successful if username and password are not empty
    if (username !== '' && password !== '') {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Question & Answer Website</h1>
      </header>
      <main>
        {!isLoggedIn ? (
          <LoginForm />
        ) : (
          <>
            <QuestionForm onSubmit={handleQuestionSubmit} />
            <QuestionList questions={questions} />
          </>
        )}
      </main>
    </div>
  );
};

export default App;
