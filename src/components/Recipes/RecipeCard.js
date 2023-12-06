import { Link } from "react-router-dom";
import classes from "./RecipeCard.module.css";

import { motion } from "framer-motion";

const recipeCard = {
  hover: {
    boxShadow: "0px 0px 10px #282828",
  },
};

const image = {
  hover: {
    scale: 1.05,
    transition: { ease: "easeIn" },
  },
};

function scrollToTop() {
  window.scrollTo(0, 0);
}

function RecipeCard(props) {
  return (
    <Link
      to={`${props.name}`}
      className={classes.recipe_card_link}
      onClick={scrollToTop}
    >
      <motion.div
        className={classes.recipe_card_container}
        whileHover="hover"
        variants={recipeCard}
      >
        <motion.img
          variants={image}
          src={props.image}
          className={classes.recipe_img}
          alt={props.name}
        />
        <div className={classes.name_txt}>{props.name}</div>
        <div className={classes.price_txt}>
          Total Price: <span>${props.totalPrice}</span>
        </div>
      </motion.div>
    </Link>
  );
}

export default RecipeCard;
