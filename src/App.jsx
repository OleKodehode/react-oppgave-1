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
      <header>
        <h1 className="companyName">{companyName}</h1>
      </header>
      <main>{<MenuComponent menu={meny} />}</main>
      <footer>
        <a
          href="https://www.flaticon.com/free-icons/restaurant"
          title="Restaurant Icon on flaticon.com"
          className="attribution"
        >
          Restaurant favicon created by Freepik - Flaticon
        </a>
      </footer>
    </>
  );
}

export default App;
