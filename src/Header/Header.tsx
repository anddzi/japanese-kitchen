import styles from "./Header.module.scss";
import image from "../sushi.jpg";
import HeaderCart from "../HeaderCart/HeaderCart";

const Header = () => {
  return (
    <>
      <header className={styles.headerContainer}>
        <h2>Japona Kukhnya</h2>
        <div>
          <HeaderCart itemsCount={5} />
        </div>
      </header>
      <div className={styles.imageWrapper}>
        <img className={styles.mainImage} src={image} alt="Sushi Logo" />
      </div>
    </>
  );
};

export default Header;
