import { useState } from "react";

function useScrollWithShadow() {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const onScrollHandler = (event) => {
    setScrollTop(event.target.scrollTop);
    setScrollHeight(event.target.scrollHeight);
    setClientHeight(event.target.clientHeight);
  };

  function getBoxShadow() {
    // When the ingredientsComponent is rendered for the first time, scrollTop, scrollHeight and clientHeight
    // will have their initial values, 0.
    // Their initial values will be used to do the equations below.
    // Given that the initial value of these 3 states will not be calculated correctly
    // (like in the onScrollHandler function), in order to make sure that the correct box-shadow class will
    // be given when the component is mounted for the first time, the order of the conditions for
    // the box-shadow class to be added is made in a way to have box shadow at the bottom of the scrollable div.
    // (see IngredientComponent)
    const isBottom = clientHeight >= scrollHeight - scrollTop;
    const isTop = scrollTop === 0;
    const isBetween = scrollTop > 0 && clientHeight < scrollHeight - scrollTop;

    return { isBottom, isTop, isBetween };
  }

  return { scrollPosition: getBoxShadow(), onScrollHandler };
}

export default useScrollWithShadow;
