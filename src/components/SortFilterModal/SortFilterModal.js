import ReactDOM from "react-dom";

import classes from "./SortFilterModal.module.css";
import { Fragment, useRef } from "react";

export const sortOptions = {
  alphaAZ: "1",
  alphaZA: "2",
  priceLowToHigh: "3",
  priceHighToLow: "4",
};

let sortCriteriaDisplayName = {};
sortCriteriaDisplayName[sortOptions.alphaAZ] = "Alphabetically (A->Z)";
sortCriteriaDisplayName[sortOptions.alphaZA] = "Alphabetically (Z->A)";
sortCriteriaDisplayName[sortOptions.priceLowToHigh] = "by Price (Low to high)";
sortCriteriaDisplayName[sortOptions.priceHighToLow] = "by Price (High to low)";

export { sortCriteriaDisplayName };

function BackdropModal(props) {
  const filterRef = useRef();
  const priceLowToHighRef = useRef();
  const priceHighToLowRef = useRef();
  const alphaAZRef = useRef();
  const alphaZARef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const filterCategory = filterRef.current.value;

    let selectedSortOption;
    if (priceLowToHighRef.current.checked) {
      selectedSortOption = priceLowToHighRef.current.value;
    } else if (priceHighToLowRef.current.checked) {
      selectedSortOption = priceHighToLowRef.current.value;
    } else if (alphaAZRef.current.checked) {
      selectedSortOption = alphaAZRef.current.value;
    } else if (alphaZARef.current.checked) {
      selectedSortOption = alphaZARef.current.value;
    } else {
      selectedSortOption = alphaAZRef.current.value;
    }
    props.onApplyClick(filterCategory, selectedSortOption);
  }

  return (
    <div
      className={`${classes.backdrop} ${!props.showModal ? classes.hide : ""}`}
      onClick={props.onBackdropClick}
    >
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <form className={classes.form} onSubmit={submitHandler}>
          <h3>Filter</h3>
          <select
            name="filter"
            className={classes.select_input}
            ref={filterRef}
          >
            <option defaultValue value="default">
              Select an option
            </option>
            <option value="Butchery">Butchery</option>
            <option value="Condiments">Condiments</option>
            <option value="Dairy">Dairy products</option>
            <option value="Eggs">Eggs</option>
            <option value="Fruits & Veg">Fruits & Vegetables</option>
            <option value="Grains">Grains</option>
            <option value="Oil">Oil</option>
            <option value="Poultry">Poultry</option>
            <option value="Seafood">Seafood</option>
            <option value="Spices">Spices</option>
            <option value="Water">Water</option>
          </select>

          <h3>Sort</h3>
          <div className={classes.radio_grp}>
            <input
              defaultChecked
              type="radio"
              name="sort"
              value={sortOptions.alphaAZ}
              id={sortOptions.alphaAZ}
              ref={alphaAZRef}
            />
            <label htmlFor={sortOptions.alphaAZ}>
              Alphabetical (A&#8594;Z)
            </label>
          </div>
          <div className={classes.radio_grp}>
            <input
              type="radio"
              name="sort"
              value={sortOptions.alphaZA}
              id={sortOptions.alphaZA}
              ref={alphaZARef}
            />
            <label htmlFor={sortOptions.alphaZA}>
              Alphabetical (Z&#8594;A)
            </label>
          </div>
          <div className={classes.radio_grp}>
            <input
              type="radio"
              name="sort"
              value={sortOptions.priceLowToHigh}
              id={sortOptions.priceLowToHigh}
              ref={priceLowToHighRef}
            />
            <label htmlFor={sortOptions.priceLowToHigh}>
              Price (Low to high)
            </label>
          </div>
          <div className={classes.radio_grp}>
            <input
              type="radio"
              name="sort"
              value={sortOptions.priceHighToLow}
              id={sortOptions.priceHighToLow}
              ref={priceHighToLowRef}
            />
            <label htmlFor={sortOptions.priceHighToLow}>
              Price (High to low)
            </label>
          </div>

          <button type="submit" className={classes.apply_btn}>
            Apply
          </button>
        </form>
      </div>
    </div>
  );
}

function SortFilterModal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackdropModal
          showModal={props.showModal}
          onApplyClick={props.onApplyClick}
          onBackdropClick={props.onBackdropClick}
        />,
        document.getElementById("modal")
      )}
    </Fragment>
  );
}

export default SortFilterModal;
