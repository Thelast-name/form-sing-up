import React from "react";
import SingUp from "./sign-up";
import "../assets/css/style.css"

function App(){
    return(
        <div className="grid-tem">
        <div className="justi">
            <h1>Learn to code by</h1>
            <h1>watching others</h1>
            <p className="text-name">See how experiened developer solve problems in real-time</p>
            <p>watching scripted tutorials is great,but understanding how</p>
            <p>developer think is invaluable.</p>
        </div>
        <SingUp />
        </div>
    );
}

export default App;