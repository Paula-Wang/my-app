import React from 'react';
import "./App.css";
import Counter from './components/Counter';
import PropDrilling from './components/PropDrilling';
import Context from './components/Context';
import MyForm from './components/MyForm';
import Book from './components/Book';
import GooseList from './components/GooseList';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      {/* <Counter initialCount={5} />
      <PropDrilling />
      <Context />
      <MyForm /> */}
      <Book />
      <GooseList />
      <Login />
      <Signup />
    </div>
  );
}

//Add props to Counter
//initialCount via TypeScript


export default App;
