import DishComponent from "./DishComponent";
import styles from "../css/MenuContainer.module.css";

export default function MenuComponent(props) {
  const { menu } = props;
  return (
    <>
      <ul className={styles.menuContainer}>
        {menu.map((dish) => (
          <DishComponent key={dish.id} {...dish} />
        ))}
      </ul>
    </>
  );
}
