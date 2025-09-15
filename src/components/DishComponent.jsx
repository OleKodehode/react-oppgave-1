import styles from "../css/DishContainer.module.css";

export default function DishComponent(dish) {
  return (
    <>
      <li id={dish.id} className={styles.card}>
        <p className={styles.category}>{dish.kategori}</p>
        <p className={styles.title}>{dish.tittel}</p>
        <p className={styles.price}>{dish.pris}</p>
        <p className={styles.ingredients}>{dish.ingredienser}</p>
      </li>
    </>
  );
}
