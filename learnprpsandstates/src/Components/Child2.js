import React from 'react'

function Child2(props) {

    const showPrivateData  = false;
  return (
    <div>
           <div>
            {showPrivateData ? <p>This is private: sdfkljawoper asdf</p> :<></>}
            {showPrivateData&&<p>This is private: sdfkljawoper asdf</p>}
           </div>
        
        Count inside child2 : {props.countFromParent}
        <button onClick={props.uploadData}>UploadData</button>
    </div>
  );
}

export default Child2