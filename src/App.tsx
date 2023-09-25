import './App.css';
import { useState } from 'react';

function App() {
    const[clicked, setClicked] = useState(false);
    return (
        <>
            <h1>[Cheese & Quackers Cooking Website]</h1>
            <p>This is NOT a cooking mama ripoff</p>
            <p>fdasfdasfkasl;fjasfiajeirqjkasfhu67869768968</p>
            <p>enter your credit card number here:</p>
            <button onClick={() => setClicked(true)}> big grey button</button>
``

            <div>
                <h2>Section 1</h2>
                <p> hallo</p>
                <p>i am
                  <br />a minion
                </p>
            </div>
        </>
    );
}

export default App;                                                             
