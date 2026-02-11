import { Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const ContactUsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Contact us at hello@example.com</Text>
    </SafeAreaView>
  );
};

export default ContactUsScreen;
