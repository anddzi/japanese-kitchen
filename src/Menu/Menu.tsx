import { FC } from "react";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./Menu.module.scss";

type MenuProps = {
  onAddCounter: (id: string, count: number) => void;
  onMenuItems: {
    id: string;
    title: string;
    description: string;
    price: string;
    countItem: number;
  }[];
};

const Menu: FC<MenuProps> = ({ onAddCounter, onMenuItems }) => {
  const saveCounter = (id: string, count: number) => {
    console.log("Menu,saveCounter + ", count);
    onAddCounter(id, count);
  };

  return (
    <div className={styles.meals}>
      <ul>
        {onMenuItems.map((item) => (
          <li key={item.id}>
            <MenuItem
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              onSaveCounter={saveCounter}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
