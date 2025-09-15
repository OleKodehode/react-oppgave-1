import styles from "../css/DishContainer.module.css";

export default function DishComponent(dish) {
  return (
    <>
      <li id={dish.id} className={styles.card}>
        <p className={styles.category}>{dish.kategori}</p>
        <h3 className={styles.title}>{dish.tittel}</h3>
        <p className={styles.price}>{dish.pris}</p>
        <p className={styles.ingredients}>
          Inneholder:
          <br />
          {dish.ingredienser}
        </p>
      </li>
    </>
  );
}
