import {
  Image,
  StyleSheet,
  Platform,
  TextInput,
  Button,
  View,
} from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.homeContainer}>
      <Image
        style={styles.welcomeImage}
        source={require("@/assets/images/barbell-welcome.jpeg")}
      />
      <ThemedText type="title">Welcome to Strength Forge</ThemedText>
      <ThemedText type="default">
        Start tracking your training today.
      </ThemedText>
      <Button
        onPress={() => {
          console.log("pebis");
        }}
        title="Get Started"
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {},
  welcomeImage: {
    width: "100%",
    height: "100%",
  },
});
