import classes from "./IngredientsDisplay.module.css";

import SearchComponent from "./SearchComponent";
import IngredientsComponent from "./IngredientsComponent";

import cartDisplayCtx from "../../store/cartDisplay-context";
import { useContext, useEffect, useState } from "react";

import { sortOptions } from "../SortFilterModal/SortFilterModal";

function IngredientsDisplay(props) {
  const cartDisplayContext = useContext(cartDisplayCtx);

  const [ingredientsToDisplay, setIngredientsToDisplay] = useState(
    props.ingredients
  );
  const [filterCategory, setFilterCategory] = useState("default");
  const [sortCriteria, setSortCriteria] = useState(sortOptions.alphaAZ);
  const [searchQuery, setSearchQuery] = useState("");

  function updateFilterAndSort(filterCategory, sortCriteria) {
    setFilterCategory(filterCategory);
    setSortCriteria(sortCriteria);
  }

  function updateSearchQuery(typedQuery) {
    setSearchQuery(typedQuery);
  }

  useEffect(() => {
    const updatedIngredients = [];
    for (const ingredient of props.ingredients) {
      let showIngredient =
        ingredient.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filterCategory === "default" ||
          ingredient.category === filterCategory);
      updatedIngredients.push({
        ...ingredient,
        show: showIngredient,
      });
    }

    switch (sortCriteria) {
      case sortOptions.alphaAZ:
        updatedIngredients.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
        break;
      case sortOptions.alphaZA:
        updatedIngredients.sort((a, b) =>
          a.name > b.name ? -1 : b.name > a.name ? 1 : 0
        );
        break;
      case sortOptions.priceLowToHigh:
        updatedIngredients.sort((a, b) =>
          a.price > b.price ? 1 : b.price > a.price ? -1 : 0
        );
        break;
      case sortOptions.priceHighToLow:
        updatedIngredients.sort((a, b) =>
          a.price > b.price ? -1 : b.price > a.price ? 1 : 0
        );
        break;
      default:
        updatedIngredients.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
    }
    setIngredientsToDisplay(updatedIngredients);
  }, [filterCategory, sortCriteria, searchQuery, props.ingredients]);

  return (
    <div
      className={`${classes.search_ingr_cont} ${
        cartDisplayContext.showCart ? classes.hide : ""
      }`}
    >
      <SearchComponent
        onFilterSortApply={updateFilterAndSort}
        onSearch={updateSearchQuery}
        filterApplied={filterCategory}
        sortApplied={sortCriteria}
      />
      <IngredientsComponent ingredients={ingredientsToDisplay} />
    </div>
  );
}

export default IngredientsDisplay;
