import React from 'react';
import { useState } from 'react';

export default function Home() {
    const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count + 1);
    }

    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
    </div>

}

function MyButton({count,onClick}) {
 

  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

