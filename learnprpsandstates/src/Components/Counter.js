

import React , {useState} from 'react'; 

function Counter() {
    let [Count, setCount] = useState(0);
    // let Count = countState[0];
    // let setCount = setCountState[1];
    function updateCount(){
        setCount(Count+1);
        // console.log('count is now: ' , Count);
    }
  return (
    <>
        <p>The value of count is :{Count}</p>
        <button onClick={updateCount}>Increment</button>
    </>
   
  );
}

export default Counter;

// click, onClick , 