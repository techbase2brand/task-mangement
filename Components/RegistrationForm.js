import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const registrationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters long")
    .max(15, "Username must not exceed 15 characters")
    .required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const RegistrationForm = () => {
  const [data, setData] = useState({});
  console.log(data, "7777777777");

  const handleOk = async (values) => {
    console.log(values, "aaaaaa");

    try {
      let res = await axios.post("http://localhost:4000/api/employee", {
        username: values.username,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      });

      if (res && res.status === 200) {
        console.log("User created successfully");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={registrationSchema}
      onSubmit={(values) => {
        setData(values, "ppppp");
        handleOk(values);
        console.log(data, "rrrrrr");
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <Text style={styles.heading}>Registration Form</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("username")}
            onBlur={handleBlur("username")}
            value={values.username}
            placeholder="Username"
          />
          {errors.username && touched.username && (
            <Text style={styles.error}>{errors.username}</Text>
          )}
          <TextInput
            style={styles.input}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            placeholder="Email"
            keyboardType="email-address"
          />
          {errors.email && touched.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}
          <TextInput
            style={styles.input}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            placeholder="Password"
            secureTextEntry
          />
          {errors.password && touched.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}
          <TextInput
            style={styles.input}
            onChangeText={handleChange("confirmPassword")}
            onBlur={handleBlur("confirmPassword")}
            value={values.confirmPassword}
            placeholder="Confirm Password"
            secureTextEntry
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <Text style={styles.error}>{errors.confirmPassword}</Text>
          )}
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSubmit(values)}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default RegistrationForm;
