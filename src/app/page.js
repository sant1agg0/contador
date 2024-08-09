"use client"
import {useState} from "react"

let i = 0;

export default function Home (){

  const[i,setI] = useState(0) //[state, setState]

  function incrementar(){
    setI(i + 1)
  }

  return (
    <div>
      <p>Hola mundo .!{i}</p>
      <button onClick={incrementar}>Incremenar</button>
      </div>
  );
}