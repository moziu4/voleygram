import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./src/components/Home";
import NuevoEvento from "./src/components/NuevoEventos";
import Evento from "./src/components/Evento";

const HomeStack = createNativeStackNavigator();

export function HomeScreen({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Inicio" component={Home} />
      <HomeStack.Screen name="Ver" component={Evento} />
    </HomeStack.Navigator>
  );
}

const Tabs = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Add") {
              iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tabs.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tabs.Screen name="Add" component={NuevoEvento} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
