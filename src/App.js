import React, {useState} from 'react';
import * as THREE from 'three';
import './App.css';

const App = () => {
  const [greeting, setGreeting] = useState(
    "Testing"
  );
  const [count, setCount] = useState(0);

  const handleChange = event => setGreeting(event.target.value);
  const clearText = event => setGreeting('');

  const incrementValue = () => {
    setTimeout(
      () => setCount(currentCount => currentCount+1),
      10
    );
  }

  const decrementValue = () => {
    setTimeout(
      () => setCount(currentCount => currentCount-1),
      10
    );
  }

  return (
    <div>
      <h1>{count}</h1>

      <Button clickHandler={incrementValue}>Increment</Button>
      <Button clickHandler={decrementValue}>Decrement</Button>
      <Headline headline={greeting}/>

      <Input value={greeting} changeHandler={handleChange}>
        Enter a custom heading  
      </Input>

      <Button clickHandler={clearText}>Clear text</Button>
    </div>
  );
}

const Headline = ({headline}) => <h1>{headline}</h1>

const Input = ({value, changeHandler, children}) => (
  <div>
    <label>
      {children}
    </label>
    <input type="text" value={value} onChange={changeHandler} />
  </div>
);

const Button = ({clickHandler, children}) => (
  <div>
    <button onClick={clickHandler}>
      {children}
    </button>
  </div>
);

export default App;
