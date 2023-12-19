import styles from "./Card.module.scss";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h1>Online Sushi Restaurant Japona Kukhnya</h1>
        <p>
          Japona Kukhnya ist ein Online-Sushi-Restaurant, in dem Ihre
          Lieblings-Sushi und Sashimi, Rollen und andere Gerichte der nationalen
          japanischen Küche von einem Team von professionellen Köchen zubereitet
          werden.
        </p>
        <p>
          Schnelle Arbeit und Qualitätsprodukte sowie die authentischsten
          Zutaten verleihen den Gerichten einen guten Geschmack und machen das
          Essen zum Vergnügen.
        </p>
      </div>
    </div>
  );
};
export default Card;
