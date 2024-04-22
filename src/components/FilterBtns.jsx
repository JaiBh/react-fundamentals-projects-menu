import FilterBtn from "./FilterBtn";

const FilterBtns = ({ items, filterItems }) => {
  let categories = ["all", ...new Set(items.map((item) => item.category))];
  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <FilterBtn
          key={index}
          category={category}
          filterItems={filterItems}
        ></FilterBtn>
      ))}
    </div>
  );
};

export default FilterBtns;
