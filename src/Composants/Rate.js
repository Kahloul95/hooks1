import React from "react";

const Rate = ({ rating, setRatingSearch, setText }) => {
  const stars = (x) => {
    let starsArray = [];
    for (let i = 1; i <= 5; i++) {
      //★★★☆☆ if x = 3
      if (i <= x) {
        starsArray.push(
          <span
            onClick={() => {
              setRatingSearch(i);
              setText("");
            }}
            key={i}
          >
            &#9733;
          </span>
        );
      } else {
        starsArray.push(
          <span
            onClick={() => {
              setRatingSearch(i);
              setText("");
            }}
            key={i}
          >
            &#9734;
          </span>
        );
      }
    }
    return starsArray;
  };

  return <div>{stars(rating)}</div>;
};

Rate.defaultProps = {
  setRatingSearch: () => {},
  setText: () => {}
};

export default Rate;
