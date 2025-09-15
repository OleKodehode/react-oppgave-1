import "./App.css";
import MenuComponent from "./components/MenuComponent";
import { meny } from "./menu_data";

function App() {
  return <>{<MenuComponent menu={meny} />}</>;
}

export default App;
