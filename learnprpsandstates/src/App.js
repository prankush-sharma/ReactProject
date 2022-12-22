// import Counter from "./Components/Counter";
// import Fruits from "./Components/Fruits";
// import Note from "./Components/note";
import { useState } from 'react';
import Child1 from './Components/Child1';
import Child2 from './Components/Child2';

function App() {
  const [countInParent, setCountInParent] = useState(0);

  function updateCountInParent(count) {
    setCountInParent(count);
  }

  function uploadData() {
    console.log('I will start uploading data now');
  }

  return (
    <div>
      {/* <Counter></Counter> */}
      {/* <Fruits></Fruits> */}
      {/* <Note/> */}
      <p>Inside the parent:{countInParent}</p>
      <Child1 onCountUpdate={updateCountInParent} />
      <Child2 countFromParent={countInParent} uploadData={uploadData} />
    </div>
  );
}

export default App;
