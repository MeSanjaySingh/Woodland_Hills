import React, { useEffect, useState } from "react";
import SearchBar from "../../Components/Home/SearchBar";
import FilterPanel from "../../Components/Home/FilterPanel";
import List from "../../Components/Home/List";
import { dataList } from "../../utils/Constants/constants";
import EmptyView from "../../Components/Common/EmptyView";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [list, setList] = useState(dataList);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [inputSearch, setInputSearch] = useState("");
  const [resultFound, setResultFound] = useState(false);
  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: "American" },
    { id: 2, checked: false, label: "Chinese" },
    { id: 3, checked: false, label: "Italian" },
  ]);

  const handleChangePrice = (event, value) => setSelectedPrice(value);

  const handleSelectedrating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleChangeChecked = (id) => {
    const cuisinesStateList = cuisines;
    const changeCheckedCuisines = cuisinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };

  const applyFilter = () => {
    let updateList = dataList;

    // Rating Filter::
    if (selectedRating) {
      updateList = updateList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }
    // Category Filter::
    if (selectedCategory) {
      updateList = updateList.filter(
        (item) => item.category === selectedCategory
      );
    }
    // Cuisines Filter:: ["american","chinees","italian"] ==> Output If True
    const cuisinesChecked = cuisines
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (cuisinesChecked.length) {
      updateList = updateList.filter((item) =>
        cuisinesChecked.includes(item.cuisine)
      );
    }
    // Price Filter ::
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updateList = updateList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    // Search Filter::
    if (inputSearch) {
      updateList = updateList.filter(
        (item) =>
          item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
          -1
      );
    }

    setList(updateList);

    !updateList.length ? setResultFound(false) : setResultFound(true);
  };
  useEffect(() => {
    applyFilter();
  }, [selectedRating, selectedCategory, cuisines, selectedPrice, inputSearch]);

  return (
    <div className="home flex flex-col h-screen ">
      {/* Search Bar  */}
      <SearchBar
        value={inputSearch}
        changeInput={(e) => setInputSearch(e.target.value)}
      />
      <div className="home_panelList-wrap flex flex-1 overflow-y-auto ">
        <div className="home_panel-wrap p-[1rem]  basis-[280px] overflow-y-auto ">
          {/* Side Panel */}
          <FilterPanel
            selectToggle={handleSelectCategory}
            selectedCategory={selectedCategory}
            selectRating={handleSelectedrating}
            selectedRating={selectedRating}
            cuisines={cuisines}
            changeChecked={handleChangeChecked}
            selectedPrice={selectedPrice}
            changedPrice={handleChangePrice}
          />
        </div>
        <div className="home_List-wrap p-[1rem] flex-1 overflow-y-auto">
          {/* List & Empty View */}
          {resultFound ? <List list={list} /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
};

export default Home;
