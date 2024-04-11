import React from 'react'
import {useState} from 'react';
import { data } from '../Db';
import { Professionals } from '../Db';



const List = () => {
    const [jobbers, setJobbers] = useState
    (Professionals)
    const [reveal,setReveal] = useState(false)
    console.log(jobbers);
    function clearAll(){
        setJobbers([])
    }

    // function for show and hide button
    function handleReveal(){
        if(reveal === false){
            setReveal(true)
        }else{
            setReveal(false)
        }
    }

  return (
    <>
    <main className='container text-center'>
        <section className=' row justify-content-around gap-1'>
            {jobbers.map((professionals)=>{
                const {id,name,role}= professionals
                return(
                    <div key={id} className='col-md-5 border my-3 p-4'>
                        <h2>{name}</h2>
                        <p>{role}</p>
                        <button className='btn btn-warning btn-sm fs-4'>clear items</button>

                    </div>
                )
            })}
            <button className='btn btn-lg btn-danger fs-2' onClick={clearAll}>clear all</button>
        </section>
            <button onClick={handleReveal}>{reveal ? "Hide" : "Show"}</button>

    <section className='shadow-lg d-flex flex-wrap justify-content-center gap-1 my-4'>
        {data.map((datum)=>{
            const {id,title,referal,priceInNaira,daily,monthly}= datum
            return(
                
                <div key={id} className='border w-25 my-3'>
                    <img src={datum.img} className='' alt="" />
                    <h2>{title}</h2>
                    <p># {priceInNaira}</p>
                    <p>${daily}</p>
                    <p>${monthly}</p>
                    <p>{referal}</p>
                    <button className="btn btn-primary btn-lg">choose a plan</button>

                </div>
            )
        })}
        
    </section>
    </main>
    </>
  )
}

export default List