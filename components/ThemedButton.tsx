import { Button } from "react-native";
import { ThemedView } from "./ThemedView";

export default function ThemedButton() {
  return (
    <ThemedView style={{ backgroundColor: "red" }}>
      <Button title="Press me" onPress={() => {}} />
    </ThemedView>
  );
}
