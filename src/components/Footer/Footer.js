import classes from "./Footer.module.css";

import { motion } from "framer-motion";

function Footer() {
  return (
    <div className={classes.footer}>
      <motion.div
        className={classes.components_container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
      >
        <div className={classes.footer_component}>
          <div className={classes.footer_inner_component}>
            <h3>Contact Us</h3>
            <hr />
            <div className={classes.info_container}>
              <svg
                className={classes.footer_icon}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#030712"
                  d="M4.615 19q-.69 0-1.152-.462Q3 18.075 3 17.385V6.615q0-.69.463-1.152Q3.925 5 4.615 5h14.77q.69 0 1.152.463q.463.462.463 1.152v10.77q0 .69-.462 1.152q-.463.463-1.153.463H4.615ZM12 12.115l-8-5.23v10.5q0 .269.173.442t.442.173h14.77q.269 0 .442-.173t.173-.442v-10.5l-8 5.23ZM12 11l7.692-5H4.308L12 11ZM4 6.885V6v11.385q0 .269.173.442t.442.173H4V6.885Z"
                />
              </svg>
              <span>foodelivery@gmail.com</span>
            </div>
            <div className={classes.info_container}>
              <svg
                className={classes.footer_icon}
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#030712"
                  d="M220.78 162.13L173.56 141a12 12 0 0 0-11.38 1a3.37 3.37 0 0 0-.38.28L137 163.42a3.93 3.93 0 0 1-3.7.21c-16.24-7.84-33.05-24.52-40.89-40.57a3.9 3.9 0 0 1 .18-3.69l21.2-25.21c.1-.12.19-.25.28-.38a12 12 0 0 0 1-11.36L93.9 35.28a12 12 0 0 0-12.48-7.19A52.25 52.25 0 0 0 36 80c0 77.2 62.8 140 140 140a52.25 52.25 0 0 0 51.91-45.42a12 12 0 0 0-7.13-12.45Zm-.78 11.45A44.23 44.23 0 0 1 176 212c-72.78 0-132-59.22-132-132a44.23 44.23 0 0 1 38.42-44a3.87 3.87 0 0 1 .48 0a4 4 0 0 1 3.67 2.49l21.11 47.14a4 4 0 0 1-.23 3.6l-21.19 25.2c-.1.13-.2.25-.29.39a12 12 0 0 0-.78 11.75c8.69 17.79 26.61 35.58 44.6 44.27a12 12 0 0 0 11.79-.87l.37-.28l24.83-21.12a3.93 3.93 0 0 1 3.57-.27l47.21 21.16a4 4 0 0 1 2.44 4.12Z"
                />
              </svg>
              <span>+ 01 23 45 67 89</span>
            </div>
          </div>
        </div>

        <div className={classes.footer_component}>
          <div className={classes.footer_inner_component}>
            <h3>Follow Us Now</h3>
            <hr />
            <div className={classes.info_container}>
              <svg
                className={classes.footer_icon}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#030712"
                  d="M17.99 1.596a27.982 27.982 0 0 0-3.037-.156C11.59 1.44 9.5 3.582 9.5 7.03v2.341H6.675a.5.5 0 0 0-.5.5v3.85a.5.5 0 0 0 .5.5H9.5v7.72a.5.5 0 0 0 .5.5h3.978a.5.5 0 0 0 .5-.5v-7.72h2.816a.5.5 0 0 0 .496-.435l.497-3.85a.5.5 0 0 0-.496-.565h-3.313V7.412c0-.97.195-1.375 1.408-1.375h2.039a.5.5 0 0 0 .5-.5V2.092a.5.5 0 0 0-.435-.496zm-.565 3.44l-1.54.001c-2.157 0-2.407 1.356-2.407 2.375v2.46a.5.5 0 0 0 .499.5h3.246l-.369 2.85h-2.876a.5.5 0 0 0-.5.5v7.718H10.5v-7.718a.5.5 0 0 0-.5-.5H7.176v-2.85H10a.5.5 0 0 0 .5-.5V7.03c0-2.874 1.665-4.59 4.453-4.59c1.009 0 1.92.055 2.472.103v2.493z"
                />
              </svg>
              <span>Foodelivery</span>
            </div>
            <div className={classes.info_container}>
              <svg
                className={classes.footer_icon}
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#030712"
                  d="M128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44Zm0 80a36 36 0 1 1 36-36a36 36 0 0 1-36 36Zm48-136H80a52.06 52.06 0 0 0-52 52v96a52.06 52.06 0 0 0 52 52h96a52.06 52.06 0 0 0 52-52V80a52.06 52.06 0 0 0-52-52Zm44 148a44.05 44.05 0 0 1-44 44H80a44.05 44.05 0 0 1-44-44V80a44.05 44.05 0 0 1 44-44h96a44.05 44.05 0 0 1 44 44ZM188 76a8 8 0 1 1-8-8a8 8 0 0 1 8 8Z"
                />
              </svg>
              <span>Foodelivery</span>
            </div>
          </div>
        </div>

        <div className={classes.footer_component}>
          <div className={classes.footer_inner_component}>
            <h3>Useful Links</h3>
            <hr />
            <span>Terms Of Service</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className={classes.copyright_container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
      >
        <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#030712"
            d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92Zm35.2-65.59a44 44 0 1 1 0-52.82a4 4 0 0 1-6.4 4.81a36 36 0 1 0 0 43.2a4 4 0 0 1 6.4 4.81Z"
          />
        </svg>
        <span>2023 Foodelivery. All Rights Reserved</span>
      </motion.div>
    </div>
  );
}

export default Footer;
