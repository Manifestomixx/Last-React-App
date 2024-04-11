import React from "react";
import { useState } from "react";

const UseState = () => {
    const [name,setName] = useState("Steff");
    const [age,setAge] = useState(50);
    const [gender ,setGender] = useState('female')
    const [number,setNumber] = useState(0)
//   let name = "Steff";
//   let age = 50;
//   let gender = "female";
  function changeDetails(){
    
    setName('Layefa');
    setGender('male');
    setAge(100)

    if (name === 'Steff') {
      setName('Layefa');
    }else{setName('Steff')}
    if (age === 50) {
      setAge(100);
    }else{setAge(50)}
    if (gender === 'female') {
      setGender('male');
    }else{setGender('female')}
  } 
 function decrease(){
  setNumber(number - 1)
 }
 function reset(){
  setNumber(0)
 }
 function increase(){
  setNumber(number + 1)
 }
  
  return (
    <>
      <main className="container my-4 border">
        <h1 className="text-center">Usestate Basics</h1>
        <hr />
        <h4>
          My name is {name}, I am {age} years old and a {gender}.
        </h4>
        <button className="btn btn-warning btn-lg" onClick={changeDetails}>
            change details
        </button><hr />

        {/* test */}
        <section className="text-center">
          <h2>{number}</h2>
          <div>
            <button className="btn btn-lg btn-danger" onClick={decrease}>dec</button>
            <button className="btn btn-lg btn-warning" onClick={reset}>reset</button>
            <button className="btn btn-lg btn-success" onClick={increase}>inc</button>
          
          </div>
        </section>
      </main>
    </>
  );
};


export default UseState;