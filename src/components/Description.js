import classes from "./Description.module.css";

function Description() {
  return (
    <div className={classes.main_container}>
      <div className={classes.single_description}>
        <svg
          className={classes.description_icon}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            stroke="#14b8a6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10z" />
            <path d="M15 8h-3m-3 8h3m0 0h1a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2h-2a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2h1m0 8v2m0-10V6" />
          </g>
        </svg>
        <h3>Affordable Prices</h3>
        <p>
          Thanks to our affordable pricing policy, our customers don't have to
          overpay for the products they need.
        </p>
      </div>

      <div className={classes.single_description}>
        <svg
          className={classes.description_icon}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#14b8a6"
            d="M16 22q-2.5 0-4.25-1.75T10 16q0-2.5 1.75-4.25T16 10q2.5 0 4.25 1.75T22 16q0 2.5-1.75 4.25T16 22Zm0-2q1.65 0 2.825-1.175T20 16q0-1.65-1.175-2.825T16 12q-1.65 0-2.825 1.175T12 16q0 1.65 1.175 2.825T16 20ZM4 20q-.825 0-1.413-.588T2 18v-7.6q0-.2.038-.4t.112-.4l2-4.6H4q-.425 0-.713-.288T3 4V3q0-.425.288-.713T4 2h7q.425 0 .713.288T12 3v1q0 .425-.288.713T11 5h-.15l1.65 3.8q-.475.25-.9.525t-.8.625L8.7 5H6.3L4 10.4V18h4.25q.125.525.337 1.038T9.1 20H4ZM16 9q-1.05 0-1.775-.725T13.5 6.5q0-1.05.725-1.775T16 4v5q0-1.05.725-1.775T18.5 6.5q1.05 0 1.775.725T21 9h-5Z"
          />
        </svg>
        <h3>Quality Products</h3>
        <p>
          We work with the best suppliers to offer our customers the fresh
          grocery products of the highest quality.
        </p>
      </div>

      <div className={classes.single_description}>
        <svg
          className={classes.description_icon}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#14b8a6"
            d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18Zm11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11Zm-8 4.414l-4-4V5.5h2v6.086L16.414 15L15 16.414Z"
          />
        </svg>
        <h3>Open 24/7</h3>
        <p>
          Unlike other grocery shops, we are ready to serve you 24/7 and offer
          the best selection of groceries.
        </p>
      </div>
    </div>
  );
}

export default Description;
