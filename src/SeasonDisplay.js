import React from "react";
import "./SeasonDisplay.css";
import springimg from "./seasonImages/spring.gif";
import summerimg from "./seasonImages/summer.gif";
import fallimg from "./seasonImages/fall.gif";
import winterimg from "./seasonImages/winter.gif";

const getSeasonData = (lat, month) => {
  console.log("Month: ", month);
  const season = {};
  if (month === 3 || month === 4 || month === 5) {
    lat > 0
      ? (season.text = "Ume are blossoming") &&
        (season.image = springimg) &&
        (season.season = "spring")
      : (season.text = "Momiji are falling") &&
        (season.image = fallimg) &&
        (season.season = "Fall");
  } else if (month === 6 || month === 7 || month === 8) {
    lat > 0
      ? (season.text = "Koi are swimming") &&
        (season.image = summerimg) &&
        (season.season = "summer")
      : (season.text = "Snow is piling") &&
        (season.image = winterimg) &&
        (season.season = "winter");
  } else if (month === 9 || month === 10 || month === 11) {
    lat < 0
      ? (season.text = "Ume are blossoming") &&
        (season.image = springimg) &&
        (season.season = "spring")
      : (season.text = "Momiji are falling") &&
        (season.image = fallimg) &&
        (season.season = "fall");
  } else if (month === 12 || month === 1 || month === 2) {
    lat < 0
      ? (season.text = "Koi are swimming") &&
        (season.image = summerimg) &&
        (season.season = "summer")
      : (season.text = "Snow is piling") &&
        (season.image = winterimg) &&
        (season.season = "winter");
  }
  console.log(season.season);
  return season;
};

const SeasonDisplay = props => {
  const season = getSeasonData(props.lat, new Date().getMonth());

  return (
    <div className="season-display">
      <h1>
        It's {season.season}, {season.text}
        <span className="blink-ellipsis">...</span>
      </h1>
      <img alt="season" src={season.image} />
    </div>
  );
};

export default SeasonDisplay;
