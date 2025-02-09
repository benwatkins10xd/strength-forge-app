import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { API_URL } from "@/constants/Constants";
import { useState } from "react";
import axios from "axios";
import { Button, View, Text, StyleSheet, TextInput } from "react-native";
import LoadingSpinner from "@/components/LoadingSpinner";
import AlertNotification from "@/components/AlertNotification";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("eeee");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter your email/password.");
      return;
    }

    // TODO: email validation before sending request

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemedView style={styles.container}>
      {error ? (
        <AlertNotification onPress={() => setError("")}>
          <ThemedText>Pebeeeeis</ThemedText>
        </AlertNotification>
      ) : null}
      <ThemedText>Login</ThemedText>
      <TextInput
        style={styles.emailInput}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextInput
        style={styles.passwordInput}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  emailInput: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    color: "#fff",
  },
  passwordInput: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
  },
});
