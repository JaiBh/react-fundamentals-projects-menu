const FilterBtn = ({ category, filterItems }) => {
  return (
    <button
      type="button"
      className="btn"
      onClick={() => {
        filterItems(category);
      }}
    >
      {category}
    </button>
  );
};

export default FilterBtn;
