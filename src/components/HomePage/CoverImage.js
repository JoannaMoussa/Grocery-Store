import coverPhoto from "../../assets/cover.jpg";

import classes from "./CoverImage.module.css";
import { NavLink } from "react-router-dom";

function CoverImage() {
  return (
    <div className={classes.cover_container}>
      <img className={classes.cover_img} src={coverPhoto} alt="Grocery items" />
      <div className={classes.cover_body}>
        <h1 className={classes.cover_title}>Welcome To Our Store</h1>
        <NavLink className={classes.cover_btn} to="/Grocery-Store/shop/">
          <span>Shop Now</span>
          <svg
            className={classes.arrow_icon}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#030712"
              d="M13.47 8.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H6.5a.75.75 0 0 1 0-1.5h9.69l-2.72-2.72Z"
            />
          </svg>
        </NavLink>
      </div>
    </div>
  );
}

export default CoverImage;
