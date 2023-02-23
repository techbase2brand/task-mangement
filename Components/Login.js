import React, { useState } from "react";
// import bcrypt from 'bcrypt';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import axios from "axios";

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = async () => {

  // };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/Login/login",
        {
          email: email,
          password: password,
        }
      );
      console.log("kkkk---");
      console.log(response, "kkkkkk");

      if (res && res.status === 200) {
        console.log("logged successfully");
      } else {
        console.log("Some error occured");
      }

      //  if (response.data.message){

      //   console.log("hhhh");
      //   alert(response.data.message);

      //  }
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const workSpace = () => {
    navigation.navigate("TaskProject");
    // navigation.navigate("TasksScreen");
  };

  const register = () => {
    navigation.navigate("Registration");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.buttonText} onPress={register}>
        register here
      </Text>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaaaaa"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={register}>
          register here
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={workSpace}>
          projects
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#aaaaaa",
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#1a73e8",
    borderRadius: 5,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
