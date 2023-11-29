import classes from "./Introduction.module.css";

function Introduction() {
  return (
    <p className={classes.intro_txt}>
      Feeling stumped about what to whip up in the kitchen? Fret not, we've got
      your back! Explore these delicious recipes that come complete with their
      own ingredient lists,
      <span> which you can dirtectly add to your cart</span>, making mealtime a
      breeze!
    </p>
  );
}

export default Introduction;
