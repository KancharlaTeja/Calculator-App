import React,{useState} from 'react'
import Keypad from './keypad'

import './App.css'

function Sweet(){
    let [input,updateinput]=useState("")
   
    function HandleClick(value){
        updateinput(input+value)
    }

    function calculate()
       {
        try
          {
                let expression = input.replace(/\b0+(\d+)/g, '$1');//removing leading zeroes
                
                if(expression.match(/\/{2,}/))
                {
                    updateinput("Give valid input")
                    setTimeout(()=>{
                        updateinput("")
                    },1000);
                }
                else
                {
                    let task = eval(expression)
                    let task1=task.toString();
                    updateinput(task1)
            }

         }
            catch(error){
                updateinput("Give valid input")
                setTimeout(() => {
                    updateinput("")
                }, 1000);
            }
        }

    
    
    function Clearinput(){
     updateinput("")
    }

    function remlast(){
        try{
            
            input=input.slice(0,-1)
            
            updateinput(input)
            
        }catch(error){
        
            updateinput("")
        }
}

    function cal_power(){
        
        if(!isNaN(input)){
       const res=Math.sqrt(parseFloat(input))
       const res1=res.toString();
       updateinput(res1)}
       else{
        updateinput("Give valid input")
        setTimeout(() => {
            updateinput('')
        }, 1000);
       }
    }
    return(
        <div className='container'>
            <div className='claculator mt-5' >
                <div style={{
                    width:'300px',
                    padding:'7px 6px',
                    margin:'0 auto',
                    backgroundColor:'lightgray',
                    border:'1px solid black',
                    alignItems:'center'
                   
                }}>
                <h1 style={{textAlign:'center', color:'red', border:'10px'}}> Calculator App</h1></div>
                <input placeholder='0' style={{color:'white'}}className='output' type='text' value={input} />
                <Keypad handle={HandleClick} calculate={calculate} Clearinput={Clearinput} remlast={remlast} cal_power={cal_power}/>
           </div>
        </div>

    )
}
export default Sweet;
