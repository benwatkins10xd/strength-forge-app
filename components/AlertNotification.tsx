import React, { useState } from "react";
import { Button, View, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";

type AlertNotificationProps = {
  onPress: () => void; // Callback function for the close button
  children: React.ReactNode; // Notification text or content
  style?: object; // Optional custom styles for the container
  type?: "success" | "error" | "default"; // Type of notification
};

export default function AlertNotification({
  onPress,
  children,
  style,
  type = "default", // Default to "default" if no type is provided
}: AlertNotificationProps) {
  const [isVisible, setIsVisible] = useState(true);

  // Close the popup and trigger any extra callbacks
  const handleClose = () => {
    setIsVisible(false);
    onPress();
  };

  // Determine the style based on the type
  const getStyleForType = () => {
    switch (type) {
      case "success":
        return styles.success;
      case "error":
        return styles.error;
      default:
        return styles.default;
    }
  };

  if (!isVisible) {
    return null; // Don't render the component if it's not visible
  }

  return (
    <View style={[styles.container, getStyleForType(), style]}>
      <View>
        <Button title="X" onPress={handleClose} />
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
  },
  success: {
    backgroundColor: "#d4edda", // Light green background
    borderColor: "#c3e6cb", // Green border
  },
  error: {
    backgroundColor: "#f8d7da", // Light red background
    borderColor: "#f5c6cb", // Red border
  },
  default: {
    backgroundColor: "#e2e3e5", // Light gray background
    borderColor: "#d6d8db", // Gray border
  },
});
