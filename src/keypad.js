import React from "react";

function Keypad({handle,calculate,Clearinput,remlast,cal_power}){
    return(
        <div className="keypad">
            <div className="row">
                <button onClick={()=>{handle("7")}}className="digit">7</button>
                <button onClick={()=>{handle("8")}} className="digit">8</button>
                <button onClick={()=>{handle("9")}} className="digit">9</button>
                <button onClick={()=>{handle("/")}} className="operator">/</button>

            </div>
            <div className="row">
                <button onClick={()=>{ handle("4")}} className="digit">4</button>
                <button onClick={()=>{ handle("5")}} className="digit">5</button>
                <button onClick={()=>{ handle("6")}} className="digit">6</button>
                <button onClick={()=>{ handle("*")}} className="operator">*</button>

            </div>
            <div className="row">
                <button onClick={()=>{ handle("1")}} className="digit">1</button>
                <button onClick={()=>{ handle("2")}} className="digit">2</button>
                <button onClick={()=>{ handle("3")}} className="digit">3</button>
                <button onClick={()=>{ handle("-")}} className="operator">-</button>

            </div>
            <div className="row">
            <button onClick={()=>{ handle("00")}} className="digit">00</button>
                <button onClick={()=>{ handle("0")}} className="digit">0</button>
                <button onClick={()=>{ handle(".")}} className="digit">.</button>
                <button onClick={()=>{ handle("+")}} className="operator">+</button>

            </div>
            <div className="row">
            <button onClick={()=>{ remlast()}} className="Clear">←</button>
                <button onClick={()=>{ Clearinput()}} className="Clear">C</button>
                <button onClick={()=>{ calculate()}} className="Clear">=</button>
                <button onClick={()=>{ cal_power()}} className="operator">√</button>


            </div>

        </div>
    )
}
export default Keypad