import { useThemeColor } from "@/hooks/useThemeColor";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function LoadingSpinner() {
  return (
    <View>
      {/* TODO: style this - use weightlifting animation instead */}
      <ActivityIndicator size="large" color={useThemeColor({}, "icon")} />
    </View>
  );
}

const styles = StyleSheet.create({});
