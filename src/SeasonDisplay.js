import React from "react";
import "./SeasonDisplay.css";
import springimg from "./seasonImages/spring.gif";
import summerimg from "./seasonImages/summer.gif";
import fallimg from "./seasonImages/fall.gif";
import winterimg from "./seasonImages/winter.gif";

const getSeasonData = (lat, month, season) => {
  console.log("Month: ", month);
  const seasons = {};
  if (month === 3 || month === 4 || month === 5) {
    lat > 0 ? (seasons.season = "spring") : (seasons.season = "fall");
  } else if (month === 6 || month === 7 || month === 8) {
    lat > 0 ? (seasons.season = "summer") : (seasons.season = "winter");
  } else if (month === 9 || month === 10 || month === 11) {
    lat < 0 ? (seasons.season = "spring") : (seasons.season = "fall");
  } else if (month === 12 || month === 1 || month === 2) {
    lat < 0 ? (seasons.season = "summer") : (seasons.season = "winter");
  }

  if (season != null) {
    seasons.season = season;
  }

  console.log(seasons.season);
  return seasons;
};

const SeasonDisplay = props => {
  const seasons = getSeasonData(props.lat, props.month, props.season);

  if (seasons.season === "spring") {
    (seasons.text = "Ume are blossoming") && (seasons.image = springimg);
  } else if (seasons.season === "summer") {
    (seasons.text = "Koi are swimming") && (seasons.image = summerimg);
  } else if (seasons.season === "fall") {
    (seasons.text = "Momiji are falling") && (seasons.image = fallimg);
  } else if (seasons.season === "winter") {
    (seasons.text = "Snow is piling") && (seasons.image = winterimg);
  }

  return (
    <div className="season-display">
      <h1>
        It's {seasons.season}, {seasons.text}
        <span className="blink-ellipsis">...</span>
      </h1>
      <img alt="season" src={seasons.image} />
    </div>
  );
};

export default SeasonDisplay;
