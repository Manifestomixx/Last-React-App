import React, { useState,useEffect,} from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Fetch = () => {
    const [count,setCount] = useState(0);
    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    // function for fetching data with Asynchronous 
    const getData = async()=>{
        try{
            setIsLoading(true)
            const req = await fetch("https://fakestoreapi.com/products")
            const res = await req.json()
            console.log(res);
            setData(res)

        }catch(error) {
            console.log(error.message);

        }finally{
            setIsLoading(false)

        }
    };
    
    function inc(){
        setCount((prev)=> prev + 1)
    }
    useEffect(()=>{
        console.log(count);
        document.title = "my work"
        getData();
    }, [])
  return (
    <>
    <main className="container text-center">
        <hr />
        <h2>Fetch and useEffect Basis</h2>
        <h1>{count}</h1>
        <button className="btn btn-success btn-lg" onClick={inc}>
            increase
        </button>

        {/* Data fetching */}
        {isLoading && <> <Spinner animation="border" />; </>}
        <section className='container row'>
            {data.map((datum)=>{
                return(
                    <div key={datum.id} className='col-md-4 justify-content-around'>
                        <h2>{datum.title.slice(0,11)}</h2>
                        <p>{datum.price}</p>
                        <img src={datum.image} alt="images" className='image-fluid col-md-4' />
                        <h5>{datum.rating.rate}</h5>
                    </div>
                )
            })}
        </section>
    </main>
    </>
  )
}

export default Fetch