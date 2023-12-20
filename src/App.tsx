import React, { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Card from "./Card/Card";
import Menu from "./Menu/Menu";
import Modal from "./Modal/Modal";

const menuItems = [
  {
    id: "menu1",
    title: "Naomi roll",
    description:
      "Philadelphia cheese, chicken fillet, masago, tomato, cucumber, sesame seeds",
    price: "$11.99",
    countItem: 0
  },
  {
    id: "menu2",
    title: "Spice in the salmon",
    description: "rice, salmon, spice sauce",
    price: "$25.99",
    countItem: 0
  },
];

function App() {
  const [sumCounter, setSumCounter] = useState<number>(0);
  const [menuCounters, setMenuCounters] = useState<{ [id: string]: number }>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = (isOpen: boolean) => {
    setIsModalOpen(isOpen);
  };

  const itemsForModal = menuItems
  .filter(item => menuCounters[item.id] && menuCounters[item.id] > 0)
  .map(item => ({
    ...item,
    countItem: menuCounters[item.id],
  }));

  const modalClose = () => {
    setIsModalOpen(false);
  };

  const addCounter = (id: string, count: number) => {
    setSumCounter((prevSumCounter) => prevSumCounter + count);
    setMenuCounters((prevMenuCounters) => {
      const updatedMenuCounters = {
        ...prevMenuCounters,
        [id]: (prevMenuCounters[id] || 0) + count,
      };
      console.log("App,addCounter", updatedMenuCounters);
      return updatedMenuCounters;
    });
  };

  return (
    <>
      {isModalOpen && <Modal onModalClose={modalClose} menuItems={itemsForModal}/>}

      <Header itemCount={sumCounter} onOpenModal={openModalHandler} />
      <Card />
      <Menu onAddCounter={addCounter} onMenuItems={menuItems} />
    </>
  );
}

export default App;
