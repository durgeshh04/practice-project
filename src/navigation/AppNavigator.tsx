import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactUsScreen from "../screens/ContactUs/ContactUsScreen";

const stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="ContactUs" component={ContactUsScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
