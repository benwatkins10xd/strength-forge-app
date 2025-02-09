import { Image, StyleSheet, Button, View, Dimensions } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { LinearGradient } from "expo-linear-gradient";
import { convertHexToRGBA } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import { APP_VERSION } from "@/constants/Version";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const backgroundColor = useThemeColor({}, "background");
  const gradientColor = convertHexToRGBA(backgroundColor, 1);
  const navigation = useNavigation();

  return (
    <ThemedView style={styles.homeContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.welcomeImage}
          source={require("@/assets/images/barbell-welcome.jpeg")}
          resizeMode="cover"
        />
        <LinearGradient
          colors={["transparent", gradientColor]}
          locations={[0.5, 1]}
          style={styles.gradientOverlay}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <ThemedText type="title">Welcome to Strength Forge</ThemedText>
          <ThemedText type="default">
            Start tracking your training today.
          </ThemedText>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              // navigation.navigate("Login");
            }}
            title="Create an Account"
          />
          <Button
            onPress={() => {
              navigation.navigate("Login");
            }}
            title="Sign In"
            color={useThemeColor({}, "icon")}
          />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <ThemedText type="footer">
          Strength Forge 2025 | v{APP_VERSION}
        </ThemedText>
      </View>
    </ThemedView>
  );
}

const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  imageContainer: {
    height: screenHeight / 4,
    width: "100%",
    position: "relative",
  },
  welcomeImage: {
    width: "100%",
    height: "100%",
  },
  gradientOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
  },
  titleContainer: {
    padding: 20,
    alignItems: "center",
    gap: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  buttonContainer: {
    marginTop: 20,
    width: "100%",
    flexDirection: "column",
    gap: 10,
    padding: 15,
  },
  footerContainer: {
    padding: 10,
    alignItems: "center",
  },
});
