import { NavigationContainer } from "@react-navigation/native"; // npm install @react-navigation/native
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // npm install @react-navigation/native-stack
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
{
  /*
import NewTravelScreen from "./Screens/NewTravelScreen";
import AllTravelsScreen from "./Screens/AllTravelsScreen";
import TravelDetailsScreen from "./Screens/TravelDetailsScreen";
import MapScreen from "./Screens/MapScreen";*/
}

//Creating pages to navigates to
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Hjem" component={HomeScreen} />
        {/*
        <Stack.Screen name="Ny rejse" component={NewTravelScreen} />
        <Stack.Screen name="Alle rejser" component={AllTravelsScreen} />
        <Stack.Screen name="Rejsedetajler" component={TravelDetailsScreen} />
        <Stack.Screen name="Destinationer" component={MapScreen} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
