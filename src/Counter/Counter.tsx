import { FC, ReactNode, useState } from "react";
import styles from "./Counter.module.scss";

type CounterProps = {
  onCount: (count: number) => void;
  value: number;
};

const Counter: FC<CounterProps> = ({ onCount, value }) => {
  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onCount(+event.target.value);
    console.log("Counter, nameChangeHandler", +event.target.value);
  };

  return (
    <input
      type="number"
      value={value}
      className={styles.itemQuantity}
      onChange={nameChangeHandler}
    >
    </input>
  );
};
export default Counter;
