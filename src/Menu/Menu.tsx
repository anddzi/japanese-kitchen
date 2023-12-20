import { FC } from "react";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./Menu.module.scss";

type MenuProps = {
  onAddCounter: (count: number) => void;
  onMenuItems: {
    id: string;
    title: string;
    description: string;
    price: string;
  }[];
};

const Menu: FC<MenuProps> = ({ onAddCounter, onMenuItems }) => {
  const saveCounter = (count: number) => {
    console.log("Menu,saveCounter  + ", count);
    onAddCounter(count);
  };

  return (
    <div className={styles.meals}>
      <ul>
        {onMenuItems.map((item) => (
          <MenuItem
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            onSaveCounter={saveCounter}
          />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
