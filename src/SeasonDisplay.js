import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 6) {
    return lat > 0 ? "Spring" : "Fall";
  } else if (month > 5 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  return <div>Season: {season}</div>;
};

export default SeasonDisplay;
