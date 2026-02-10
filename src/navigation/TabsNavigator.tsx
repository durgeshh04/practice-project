import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IntroScreen from "../screens/Intro/IntroScreen";
import ContactUsScreen from "../screens/ContactUs/ContactUsScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "dodgerblue",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          // backgroundColor: "cyan",
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: "bold",
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
        name="IntroScreen"
        component={IntroScreen}
      />
      <Tab.Screen
        options={{
          title: "Contact Us",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="contact-book" size={24} color={color} />
          ),
        }}
        name="ContactUsScreen"
        component={ContactUsScreen}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
