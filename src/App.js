import React from 'react';
import './App.css';


//lets create a counter app that allows to increment and decrement a number

const App = () => {

 //Use State
 const [count, setCount] = useState(0);

 UseEffect(() => {

     //This effect will run after the first render and after every update
     console.log('useEffect ran')
 });

 //Event handling
 //Arrow function to increase 
 const incrementClick = () => {
     console.log('incrementClick');
     setCount('count + 1');
 };

 //Event handling
 //Arrow function to decrease
 const decrementClick = () => {
     console.log('decrementClick');
     setCount('count - 1');
 };

//Conditional Rendering
  return (
    <div>
     <h1>Counter is Zero</h1>
     <button onClick={incrementClick}>Increment</button>
     <button onClick={DecrementClick}>decrement</button>
    </div>
  );
};

export default App;
