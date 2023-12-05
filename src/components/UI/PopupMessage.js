import classes from "./PopupMessage.module.css";
import { motion } from "framer-motion";

function PopupMessage(props) {
  console.log("popup message component");
  return (
    <motion.div
      className={`${classes.message_container} ${
        props.error ? classes.error : classes.success
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 1, 1, 0], transition: { duration: 3 } }}
    >
      {props.error && (
        <svg
          className={classes.icon}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f0fdfa"
            d="M12 16.462q.262 0 .438-.177q.177-.177.177-.439q0-.261-.177-.438q-.176-.177-.438-.177t-.438.177q-.177.177-.177.438q0 .262.177.439q.176.177.438.177Zm-.5-3.308h1v-6h-1v6ZM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21ZM12 20q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
          />
        </svg>
      )}
      {!props.error && (
        <svg
          className={classes.icon}
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            stroke="#f0fdfa"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m4 8l2.05 1.64a.48.48 0 0 0 .4.1a.5.5 0 0 0 .34-.24L10 4" />
            <circle cx="7" cy="7" r="6.5" />
          </g>
        </svg>
      )}
      <p>{props.message}</p>
    </motion.div>
  );
}

export default PopupMessage;
