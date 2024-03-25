import React from "react";
import { createContext, useState, useContext } from "react";

type WeatherContextProps = {
    weather: string;
    changeWeather: () => void;
};

export const WeatherContext = createContext<WeatherContextProps | null>(null);

const Context = () => {
  const [weather, setWeather] = useState("🌞");

  const changeWeather = () => setWeather("🌧️");

  return (
    <WeatherContext.Provider value={{ weather, changeWeather }}>
      <Europe />
    </WeatherContext.Provider>
  );
};

const Europe = () => {
  return <Estonia />;
};

const Estonia = () => {
  return <Tallinn />;
};

const Tallinn = () => {
  const { weather, changeWeather } = useContext(WeatherContext)!;

  return <div onClick={changeWeather}>{weather}</div>;
};

export default Context;