import classes from "./ShopPageWrapper.module.css";

function ShopPageWrapper(props) {
  return <div className={classes.wrapper}>{props.children}</div>;
}

export default ShopPageWrapper;
