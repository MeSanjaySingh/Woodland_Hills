import React from "react";
import FilterListToggel from "../Common/FilterListToggel";
import { categoryList, ratingList } from "../../utils/Constants/constants";
import CheckboxProton from "../Common/CheckBoxProton";
import SliderProton from "../Common/SliderProton";

const FilterPanel = ({
  selectedCategory,
  selectToggle,
  selectedRating,
  selectRating,
  cuisines,
  changeChecked,
  selectedPrice,
  changedPrice,
}) => {
  return (
    <div>
      {/* Category */}
      <div className="input-group mb-[2rem]">
        <p className="label mb-[.8rem] font-medium">Category</p>
        <FilterListToggel
          Options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div>
      {/* Cusines */}
      <div className="input-group">
        <p className="label mb-[.8rem] font-medium">Cuisnes</p>
        {cuisines.map((cuisine) => (
          <CheckboxProton
            key={cuisine.id}
            cuisine={cuisine}
            changeChecked={changeChecked}
          />
        ))}
      </div>
      {/* Price Range */}
      <div className="input-group">
        <p className="label-range mb-[2.5rem] font-medium">Price Range</p>
        <SliderProton value={selectedPrice} changedPrice={changedPrice} />
      </div>
      {/* Star Rating */}
      <div className="input-group">
        <p className="label mb-[.8rem] font-medium">Star Rating</p>
        <FilterListToggel
          Options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
  );
};

export default FilterPanel;
