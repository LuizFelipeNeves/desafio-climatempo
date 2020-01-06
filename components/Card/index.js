import React from "react";
import classes from "./style.sass";
import formatdate from "../../utils/formatdate";
import CardTitle from "./CardTitle";
import WeatherInfo from "./WeatherInfo";

import downloadImg from "../../images/icons/download.png";
import uploadImg from "../../images/icons/upload.png";
import umbrellaImg from "../../images/icons/raindrop-close-up.png";
import dropImg from "../../images/icons/raindrop-close-up.png";

export default ({ forecast }) => {
  const minTemperature = <span>{forecast.temperature.min}°C</span>;
  const maxTemperature = <span>{forecast.temperature.max}°C</span>;
  const rainPrecipitation = <span>{forecast.rain.precipitation}mm</span>;
  const rainProbability = <span>{forecast.rain.probability}%</span>;

  return (
    <div className={classes.Card}>
      <CardTitle date={formatdate(forecast.date)} description={forecast.text} />
      <div className={classes.WeatherInfoCard}>
        <WeatherInfo image={uploadImg} weatherData={maxTemperature} max/>
        <WeatherInfo image={downloadImg} weatherData={minTemperature} min/>
        <WeatherInfo image={dropImg} weatherData={rainPrecipitation} />
        <WeatherInfo image={umbrellaImg} weatherData={rainProbability}/>
      </div>
    </div>
  );
};
