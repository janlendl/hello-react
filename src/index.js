import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {

  return (
    <button onClick={ props.reset }>
      { props.children }
    </button>
  );
};

const Application = () => {

  const [name, setname] = useState(`[ Your Name ]`);

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      {/* your code here -- this entire line including the curly braces can be removed */}
      <input placeholder='Type Your Name'></input>
      <Button reset={reset}>Reset</Button>
      <h1>Hello { name }</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
