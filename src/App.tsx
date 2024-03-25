import React from 'react';
import "./App.css";
import Counter from './components/Counter';
import PropDrilling from './components/PropDrilling';
import Context from './components/Context';
import MyForm from './components/MyForm';

function App() {
  return (
    <div>
      <Counter initialCount={5} />
      <PropDrilling />
      <Context />
      <MyForm />
    </div>
  );
}

//Add props to Counter
//initialCount via TypeScript


export default App;
