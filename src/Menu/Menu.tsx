import { FC } from "react";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./Menu.module.scss";
import Button from "../Button/Button";

const Menu: FC = () => {
  return (
    <div className={styles.meals}>
      <ul>
        <MenuItem
          key="menu1"
          title='Ролл "Наоми"'
          description="Сыр Филадельфия, куринное филе, масаго, помидор, огурец, кунжут"
          price="$11.99"
        />
      </ul>
    </div>
  );
};

export default Menu;
