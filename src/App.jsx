import { useState } from 'react'
import './App.css'
import Footer from './layouts/Footer'
import Hero from './components/Hero'
import Products from './components/Products'
import Navbar from './layouts/Navbar'
import ClickEvents from './components/ClickEvents'
import UseState from './components/UseState'
import List from './components/List'
import ConditionalRendering from './components/ConditionalRendering'
import MoreDetails from './components/MoreDetails'
import Form from './components/Form'
import reactLogo from "./assets/react.svg"
import Fetch from './components/Fetch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [cart] = useState([   {id:1,title:"premuim shirt",price:250,description:'long sleeve black',img:reactLogo},
  {id:2,title:"Nike",price:550,description:'Black Nike shoe,peoples choice',img:reactLogo},
  {id:3,title:"Nike",price:550,description:'Black Nike shoe,peoples choice',img:reactLogo},
  {id:4,title:"Nike",price:550,description:'Black Nike shoe,peoples choice',img:reactLogo},
]);
  // console.log("the length of the cart is" +cart.length);
  
  

  return (
    <>
  
      <BrowserRouter>
      <Navbar cart={cart}/>
      <Routes>
        <Route path='/'  element={<Hero/>}  />
        <Route path='/fetch'  element={<Fetch/>}  />
        <Route path='/form'  element={<Form/>}  />
        <Route path='/conditionalrendering'  element={<ConditionalRendering/>}  />
        <Route path='/products'  element={<Products cartItem={cart}/>}  />
        <Route path='/clickevents'  element={<ClickEvents/>}  />
        <Route path='/list'  element={<List/>}  />
        <Route path='/usestate'  element={<UseState/>}  />
        <Route path='/moredetails'  element={<MoreDetails/>}  />
        <Route path='/form'  element={<Form/>}  />

      </Routes>
      
      <Footer/>
      </BrowserRouter>
     
    </>
  )
}

export default App
