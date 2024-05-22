import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { s } from "./inputStyle";

export function InputTemperature({ defaultValue,onChangeText,unit }) {
  return (
    <>
      <View style={s.container}>
        <TextInput
          style={s.input}
          placeholder="Entrer une température"
          keyboardType="default"
          maxLength={4}
          defaultValue={defaultValue}
          onChangeText={onChangeText}
        />
        <Text style={s.unit}>{unit}</Text>
      </View>
    </>
  );
}
