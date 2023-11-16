import classes from "./IngredientCard.module.css";
//classes.${props.category}

const ingredient_category_to_classname = {
  "Fruits & Veg": "fruits_veg",
  Eggs: "eggs",
  Condiments: "condiments",
  Dairy: "dairy_products",
  Spices: "spices",
  Butchery: "butchery",
  Poultry: "poultry",
  Grains: "grains",
  Oil: "oil",
  Seafood: "seafood",
  Water: "water",
};

function IngredientCard(props) {
  return (
    <div className={classes.ingredient_card}>
      <div
        className={`${classes.category} ${
          classes[ingredient_category_to_classname[props.category]] ?? ""
        }`}
      >
        {props.category}
      </div>
      <img
        className={classes.ingredient_img}
        src={props.image}
        alt={props.name}
      />
      <h3>{props.name}</h3>
      <p>
        ${props.price}
        <sub>/{props.unit}</sub>
      </p>
      <svg
        className={classes.icon}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#14b8a6"
          d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1V2m6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5H16Z"
        />
      </svg>
    </div>
  );
}

export default IngredientCard;
