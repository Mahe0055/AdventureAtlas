import { NavigationContainer } from "@react-navigation/native"; // npm install @react-navigation/native
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // npm install @react-navigation/native-stack
import LoginScreen from "./Screens/LoginScreen.js";
import HomeScreen from "./Screens/HomeScreen.js";

//Creating pages to navigates to
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Hjem" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
