import styles from "./Header.module.scss";
import image from "../sushi.jpg";
import HeaderCart from "../HeaderCart/HeaderCart";
import { FC } from "react";

type HeaderProps = {
  itemCount: number;
  onOpenModal: (isOpen: boolean) => void;
};

const Header: FC<HeaderProps> = ({itemCount, onOpenModal}) => {
  const openModalHandler = () => {
    onOpenModal(true);
  };
  return (
    <>
      <header className={styles.headerContainer}>
        <h2>Japona Kukhnya</h2>
        <div>
          <HeaderCart itemsCount={itemCount} onOpenModal={openModalHandler}/>
        </div>
      </header>
      <div className={styles.imageWrapper}>
        <img className={styles.mainImage} src={image} alt="Sushi Logo" />
      </div>
    </>
  );
};

export default Header;
