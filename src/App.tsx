import React, { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Card from "./Card/Card";
import Menu from "./Menu/Menu";


const menuItesms = [
  {
    id: "menu1",
    title: "Naomi roll",
    description: "Philadelphia cheese, chicken fillet, masago, tomato, cucumber, sesame seeds",
    price: "$11.99",
  },
  {
    id: "menu2",
    title: "Spice in the salmon",
    description: "rice, salmon, spice sauce",
    price: "$11.99",
  },
];

function App() {

  const[sumCounter, setSumCounter] = useState<number>(0);

  const addCounter = (count: number) => {
    setSumCounter(prevSum => prevSum + count);
    console.log("App,addCounter  + ",count);
  }

  return (
    <>
      <Header itemCount={sumCounter} />
      <Card />
      <Menu onAddCounter={addCounter} onMenuItems={menuItesms}/>
    </>
  );
}

export default App;
