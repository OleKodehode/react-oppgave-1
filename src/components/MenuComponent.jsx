import DishComponent from "./DishComponent";
import styles from "../css/MenuContainer.module.css";

export default function MenuComponent(props) {
  const { menu } = props;
  return (
    <>
      <h2 className={styles.subTitle}>Forretter</h2>
      <ul className={styles.menuContainer}>
        {menu
          .filter((dish) => dish.kategori === "Forrett")
          .map((dish) => (
            <DishComponent key={dish.id} {...dish} />
          ))}
      </ul>
      <h2 className={styles.subTitle}>Hovedretter</h2>
      <ul className={styles.menuContainer}>
        {menu
          .filter((dish) => dish.kategori === "Hovedrett")
          .map((dish) => (
            <DishComponent key={dish.id} {...dish} />
          ))}
      </ul>
      <h2 className={styles.subTitle}>Desserter</h2>
      <ul className={styles.menuContainer}>
        {menu
          .filter((dish) => dish.kategori === "Dessert")
          .map((dish) => (
            <DishComponent key={dish.id} {...dish} />
          ))}
      </ul>
    </>
  );
}

/*
{menu.map((dish) => (
          <DishComponent key={dish.id} {...dish} />
        ))}
*/
