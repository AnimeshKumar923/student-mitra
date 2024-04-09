import React, { useState } from 'react';
import QuestionList from './components/QuestionList';
import QuestionForm from './components/QuestionForm';
import 'semantic-ui-css/semantic.min.css'
import LoginForm from './components/LoginLayout';

const App = () => {
  const [questions, setQuestions] = useState([]);

  const handleQuestionSubmit = (newQuestion) => {
    setQuestions([...questions, { ...newQuestion, id: questions.length + 1 }]);
  };

  return (
    <div className="App">
      <header>
        <h1>Question & Answer Website</h1>
      </header>
      <main>
        <QuestionForm onSubmit={handleQuestionSubmit} />
        <QuestionList questions={questions} />
      </main>
    </div>
  );
};

export default App;
