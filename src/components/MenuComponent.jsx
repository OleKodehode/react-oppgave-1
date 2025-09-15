import DishComponent from "./DishComponent";
import styles from "../css/MenuContainer.module.css";

export default function MenuComponent(props) {
  const { menu } = props;
  return (
    <>
      <p className={styles.subTitle}>Forretter</p>
      <ul className={styles.menuContainer}>
        {menu
          .filter((dish) => dish.kategori === "Forrett")
          .map((dish) => (
            <DishComponent key={dish.id} {...dish} />
          ))}
      </ul>
      <p className={styles.subTitle}>Hovedretter</p>
      <ul className={styles.menuContainer}>
        {menu
          .filter((dish) => dish.kategori === "Hovedrett")
          .map((dish) => (
            <DishComponent key={dish.id} {...dish} />
          ))}
      </ul>
      <p className={styles.subTitle}>Desserter</p>
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
