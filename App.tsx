import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./src/navigation/TabsNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
