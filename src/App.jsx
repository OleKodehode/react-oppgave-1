import "./App.css";
import MenuComponent from "./components/MenuComponent";
import { meny } from "./menu_data";

const companyName = "Restaurant KodeHode";

function App() {
  // const categoryLookup = {
  //   Forrett: 0,
  //   Hovedrett: 1,
  //   Dessert: 2,
  // };

  // const sortedMenu = meny.sort(
  //   (a, b) => categoryLookup[a.kategori] - categoryLookup[b.kategori]
  // );

  return (
    <>
      <h1 className="companyName">{companyName}</h1>
      {<MenuComponent menu={meny} />}
    </>
  );
}

export default App;
