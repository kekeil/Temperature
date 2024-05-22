import { Text, View } from "react-native";
import {s} from "./temperatureDisplay.style"
export function TemperatureDisplay({ value, unit }) {
  return (
    <>
      
        <Text style={s.text}>
          {value} {unit}
        </Text>
      
    </>
  );
}
