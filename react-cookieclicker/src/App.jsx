import Header from "./components/Header";
import {useState, useEffect } from "react";
import ShopOneButton from "./components/ShopOneButton";

export default function App() {
  const [ricks, setRicks] = useState(0);
  const [rps, setRps] = useState(1);
  
  useEffect(function() {
    const Interval = setInterval(function(){
      setRicks((curr) => curr + rps)
    }, 1000);

    return () => clearInterval(Interval);
  }, [rps]);

  function addRicks() {
    setRicks(ricks + 1);
  }

  function shopOne() {
    setRicks(ricks - 10);
    setRps(rps + 1);
  }

  return (
    <div>
      <Header/>

      <button onClick = {addRicks}> I am a cookie </button>
      <p>Ricks : {ricks}</p>

      <p>Ricks per second : {rps} </p>

      <ShopOneButton shopOne={shopOne}/>
    </div> 
  )
}