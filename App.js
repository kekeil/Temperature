import { ImageBackground, Text, View, } from "react-native";
import { s } from "./App.style";
import hotImage from "./assets/hot.png";
import coldImage from "./assets/cold.png";
import { InputTemperature } from "./components/input/input";
import { TemperatureDisplay } from "./components/temperatureDisplay/temperatureDisplay";
import { useState,useEffect } from "react";
import { DEFAULT_TEMPERATURE, UNITS, DEFAULT_UNIT } from "./constants";
import {
  getOppositeUnit,
  convertTemperatureTo,
  isIceTemperature
} from "./services/temperature-service";
import { ButtonConvert } from "./components/buttonConvert/buttonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const [currentBackground,setCurrentBackground] = useState()
  const oppositeUnit = getOppositeUnit(currentUnit);

  useEffect(() => {
    const temperatureAsFloat = Number.parseFloat(inputValue);
    if (!isNaN(temperatureAsFloat)) {
      const isColdBackground = isIceTemperature(inputValue, currentUnit);
      setCurrentBackground(isColdBackground ? coldImage : hotImage);
    }
  }, [inputValue, currentUnit]);

  function getConvertedTemperature() {
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat)
      ? ""
      : convertTemperatureTo(valueAsFloat, oppositeUnit).toFixed(1);
  }
  return (
    <>
      <ImageBackground source={currentBackground} style={s.container}>
        <View style={s.workspace}>
          <TemperatureDisplay
            value={getConvertedTemperature()}
            unit={oppositeUnit}
          />
          <InputTemperature
            onChangeText={setInputValue}
            defaultValue={DEFAULT_TEMPERATURE}
            unit={currentUnit}
          />
          <ButtonConvert
            onPress={() => {
              setCurrentUnit(oppositeUnit);
            }}
            unit={currentUnit}
          />
        </View>
      </ImageBackground>
    </>
  );
}
