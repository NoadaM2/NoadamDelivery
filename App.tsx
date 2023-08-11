import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import tw from "twrnc";
import HomeScreen from "./src/screens/HomeScreen";
import RestarauntScreen from "./src/components/RestarauntScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaraunt" component={RestarauntScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
