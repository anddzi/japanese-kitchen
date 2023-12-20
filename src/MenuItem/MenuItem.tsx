import React, { useState, MouseEvent } from "react";
import styles from "./MenuItem.module.scss";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";

type MenuItemProps = {
  id: string;
  title: string;
  description: string;
  price: string;
  onSaveCounter: (id:string, count: number) => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ id, title, description, price, onSaveCounter }) => {

    const [counter, setCounter] = useState<number>(0);

    const saveCounter = (count: number) => {
        console.log("MenuItem,saveCounter",count);
        setCounter(count);
    }


    const submitHandler = () => {
      console.log("MenuItem,submitHandler", counter);
      onSaveCounter(id, counter); 
      setCounter(0);
    };

  return (
    <div className={styles.menuItem}>
      <div className={styles.itemDetails}>
        <div className={styles.titleAndCounter}>
          <h3 className={styles.itemTitle}>{title}</h3>
          <div className={styles.counterWrapper}>
            <h4 className={styles.quantityLabel}>Anzahl</h4>
            <Counter onCount={saveCounter} value={counter} />
          </div>
        </div>
        <p className={styles.itemDescription}>{description}</p>
        <div className={styles.itemPriceSection}>
          <p className={styles.itemPrice}>{price}</p>
          <div className={styles.itemActions}>
            <Button onAction={submitHandler} variant="action">Hinzufügen</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
