import React, { useState, useEffect, useRef, useCallback,useContext } from "react";

function App2() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `you clicked ${count} times`;
    })   
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => { setCount(count + 1); }}>按钮</button>
        </div>
    );
}

export default App2;