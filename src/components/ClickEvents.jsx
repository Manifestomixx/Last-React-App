import React from 'react'
import { useState } from 'react';

const ClickEvents = () => {
    function clicker (){
        console.log('hello this is Manifesto!');
    }
    function handleClick(){
        console.log('Hello world!');
    }
    // function below is for parameter and argument
    let handleClickAgain = function(parameter){
        console.log(`jesus you love me too much ${parameter}`);
    }
    // =========================================================
        // for console and browser using useState and State
     // ========================================================
    const [name,setName]= useState('Manifesto');
    // let name = "Manifesto";
    let changeName = ()=>{
        setName('Edafe')
        console.log(name);
    }

    




  return (
    <>
    <main className='container my-4 border'>
        <h2 className='text-center'>Click Events in React</h2><hr />
        <button className='btn btn-primary btn-lg' onClick={handleClick}>Click me</button>

        <button className='btn btn-success btn-lg'onClick={clicker}>Click moi</button>

        
        {/* the below function is meant to explain how to write a function that has a parameter and an argument */}
        <button className='btn btn-warning btn-lg' onClick={()=>handleClickAgain('argument')}>click again</button>

        {/* function for console and browser */}
        <h2>{name}</h2>
        <button className='btn btn-danger btn-lg' onClick={changeName}>click to change name</button>

    </main>
    
    </>
    
  )
}

export default ClickEvents