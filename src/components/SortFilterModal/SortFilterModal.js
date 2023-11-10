import ReactDOM from "react-dom";

import classes from "./SortFilterModal.module.css";
import { Fragment } from "react";

function BackdropModal(props) {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <form className={classes.form} onSubmit={props.onApplyClick}>
          <h3>Filter</h3>
          <select name="filter" className={classes.select_input}>
            <option selected value="default">
              Select an option
            </option>
            <option value="Butchery">Butchery</option>
            <option value="Condiments">Condiments</option>
            <option value="Dairy products">Dairy products</option>
            <option value="Eggs">Eggs</option>
            <option value="Fruits & Vegetables">Fruits & Vegetables</option>
            <option value="Grains">Grains</option>
            <option value="Oil">Oil</option>
            <option value="Poultry">Poultry</option>
            <option value="Seafood">Seafood</option>
            <option value="Spices">Spices</option>
            <option value="Water">Water</option>
          </select>

          <h3>Sort</h3>
          <div className={classes.radio_grp}>
            <input type="radio" name="sort" value="lowToHigh" id="lowToHigh" />
            <label for="lowToHigh">Price (Low to high)</label>
          </div>
          <div className={classes.radio_grp}>
            <input type="radio" name="sort" value="highToLow" id="highToLow" />
            <label for="highToLow">Price (High to low)</label>
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
        <BackdropModal onApplyClick={props.onApplyClick} />,
        document.getElementById("modal")
      )}
    </Fragment>
  );
}

export default SortFilterModal;
