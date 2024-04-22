import MenuItem from "./MenuItem";

const MenuItems = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => (
        <MenuItem key={item.id} {...item}></MenuItem>
      ))}
    </div>
  );
};

export default MenuItems;
