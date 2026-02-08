import { View } from "react-native";
import React from "react";
import { FoodLogo, SunImage } from "../../assets/icons";
import styles from "./styles";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <FoodLogo />
      <View style={styles.sunImg}>
        <SunImage />
      </View>
    </View>
  );
};

export default IntroScreen;
