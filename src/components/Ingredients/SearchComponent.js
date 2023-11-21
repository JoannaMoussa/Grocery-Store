import { Fragment, useState } from "react";

import classes from "./SearchComponent.module.css";
// The 2 imports below are essencial to use the classes defined for the background color of each filter category
import ingredientCardClasses from "./IngredientCard.module.css";
import { ingredient_category_to_classname } from "./IngredientCard";

import SortFilterModal from "../SortFilterModal/SortFilterModal";

import {
  sortOptions,
  sortCriteriaDisplayName,
} from "../SortFilterModal/SortFilterModal";

function SearchComponent(props) {
  const [showModal, setShowModal] = useState(false);

  function sortFilterClickHandler() {
    setShowModal(true);
  }

  function applySortFilterHandler(filterCategory, sortCriteria) {
    setShowModal(false);
    props.onFilterSortApply(filterCategory, sortCriteria);
  }

  function closeModal() {
    setShowModal(false);
  }

  function searchQueryChangeHandler(event) {
    props.onSearch(event.target.value);
  }

  return (
    <Fragment>
      <SortFilterModal
        showModal={showModal}
        onApplyClick={applySortFilterHandler}
        onBackdropClick={closeModal}
      />
      <div className={classes.main_container}>
        <div className={classes.search_container}>
          <svg
            className={classes.icon}
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#030712"
              d="M11.5 2.75a8.75 8.75 0 0 1 6.695 14.384l6.835 6.836a.75.75 0 0 1-.976 1.133l-.084-.073l-6.836-6.835A8.75 8.75 0 1 1 11.5 2.75Zm0 1.5a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 0 0 0-14.5Z"
            />
          </svg>
          <input
            className={classes.input_field}
            placeholder="Search"
            onChange={searchQueryChangeHandler}
          />
        </div>
        <button
          className={classes.sort_filter_container}
          onClick={sortFilterClickHandler}
        >
          <div className={classes.sort_filter_text}>Sort | Filter</div>
          <svg
            className={classes.icon}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#030712"
              d="M10.5 8.25c-.19 0-.38-.07-.53-.22L8 6.06L6.03 8.03c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l2.5-2.5c.29-.29.77-.29 1.06 0l2.5 2.5c.29.29.29.77 0 1.06c-.15.15-.34.22-.53.22Z"
            />
            <path
              fill="#030712"
              d="M8 19.75c-.41 0-.75-.34-.75-.75V5c0-.41.34-.75.75-.75s.75.34.75.75v14c0 .41-.34.75-.75.75Zm8 0c-.19 0-.38-.07-.53-.22l-2.5-2.5c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0L16 17.94l1.97-1.97c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2.5 2.5c-.15.15-.34.22-.53.22Z"
            />
            <path
              fill="#030712"
              d="M16 19.75c-.41 0-.75-.34-.75-.75V5c0-.41.34-.75.75-.75s.75.34.75.75v14c0 .41-.34.75-.75.75Z"
            />
          </svg>
          <svg
            className={classes.icon}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke="#030712"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 3h16a1 1 0 0 1 1 1v1.586a1 1 0 0 1-.293.707l-6.415 6.414a1 1 0 0 0-.292.707v6.305a1 1 0 0 1-1.243.97l-2-.5a1 1 0 0 1-.757-.97v-5.805a1 1 0 0 0-.293-.707L3.292 6.293A1 1 0 0 1 3 5.586V4a1 1 0 0 1 1-1Z"
            />
          </svg>
        </button>
      </div>

      {(props.sortApplied !== sortOptions.alphaAZ ||
        props.filterApplied !== "default") && (
        <div className={classes.sort_filter_option_displayed_container}>
          {props.sortApplied !== sortOptions.alphaAZ && (
            <p className={classes.sort_criteria}>
              Sorted <span>{sortCriteriaDisplayName[props.sortApplied]}</span>
            </p>
          )}
          {props.filterApplied !== "default" && (
            <p
              className={`${classes.filter_criteria} ${
                ingredientCardClasses[
                  ingredient_category_to_classname[props.filterApplied]
                ] ?? ""
              }`}
            >
              Filter: <span>{props.filterApplied}</span>
            </p>
          )}
        </div>
      )}
    </Fragment>
  );
}

export default SearchComponent;
