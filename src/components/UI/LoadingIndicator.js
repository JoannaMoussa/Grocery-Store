import classes from "./LoadingIndicator.module.css";

function LoadingIndicator() {
  return (
    <div className={classes.loader_container}>
      <div className={classes.dot}></div>
      <div className={classes.dot}></div>
      <div className={classes.dot}></div>
      <div className={classes.dot}></div>
      <div className={classes.dot}></div>
    </div>
  );
}

export default LoadingIndicator;
