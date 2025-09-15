import "./App.css";
import MenuComponent from "./components/MenuComponent";
import { meny } from "./menu_data";

function App() {
  const categoryLookup = {
    Forrett: 0,
    Hovedrett: 1,
    Dessert: 2,
  };
  // Sort the menu based on the value in the lookup object - Sort by category.
  const sortedMenu = meny.sort(
    (a, b) => categoryLookup[a.kategori] - categoryLookup[b.kategori]
  );
  return <>{<MenuComponent menu={sortedMenu} />}</>;
}

export default App;
