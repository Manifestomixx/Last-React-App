import React, { useState } from 'react';
import MoreDetails from './MoreDetails';

const ConditionalRendering = () => {
    const [determinant,setDeterminant] = useState(false);
    // let showData = determinant || "Mern";
    let hideData = determinant && "Mern";
    // console.log(showData);
    console.log(hideData);
    function handleHide(){
        !determinant ? setDeterminant(true) : setDeterminant(false)
        // if(determinant){
        //     setDeterminant(true)
        // }else{
        //     setDeterminant(false)
        // }
    }
  return (
    <>
    <main className='container text-center my-5'>
        <h2 className='text-primary'>Conditional Rendering</h2>
        <hr />
        <form>
            <input type="text" placeholder='your name' />
            <br /><br />
            {determinant && <MoreDetails/>}
        </form>
        <button onClick={handleHide}>{!determinant ? "see more" : "see less"}</button>
    </main>
    </>
  )
}

export default ConditionalRendering