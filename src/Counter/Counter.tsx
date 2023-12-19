import { FC, useState } from "react";
import styles from "./Counter.module.scss";

type CounterProps = {
  onCount: (count: number) => void;
};

const Counter: FC<CounterProps> = ({ onCount }) => {
  const [count, setCount] = useState<number>(0);

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount(+event.target.value);
    onCount(+event.target.value);
    console.log(+event.target.value);
  };

  return (
    <input
      type="number"
      value={count}
      className={styles.itemQuantity}
      onChange={nameChangeHandler}
    />
  );
};
export default Counter;
