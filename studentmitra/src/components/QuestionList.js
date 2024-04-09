import React from 'react';

const QuestionList = ({ questions }) => {
  return (
    <div>
      <h2>Questions</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <strong>{question.title}</strong> - {question.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
