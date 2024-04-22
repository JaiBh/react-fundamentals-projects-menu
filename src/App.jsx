import { useState } from "react";
import menu from "./data";
import MenuItems from "./components/MenuItems";
import FilterBtns from "./components/FilterBtns";
import Title from "./components/Title";

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
    } else {
      setMenuItems(menu.filter((item) => item.category === category));
    }
  };
  return (
    <main>
      <section className="menu">
        <Title></Title>
        <FilterBtns items={menu} filterItems={filterItems}></FilterBtns>
        <MenuItems items={menuItems}></MenuItems>
      </section>
    </main>
  );
};
export default App;
