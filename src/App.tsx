import React from 'react';
import './App.css';
import Orange from './Orange';
import Toggle from './Toggle';
import LearnState from './learnTs/LearnState';
import TodoList from './learnTs/TodoList';
import LearnRefs from './learnTs/LearnRefs';
import LearnEvent from './learnTs/LearnEvent';

function App() {
  return (
    <div>
      <Orange name='时钟' />
      <Toggle name='开关' />
      <LearnState />
      <TodoList />
      <LearnRefs />
      <LearnEvent />
    </div>
  );
}

export default App;
