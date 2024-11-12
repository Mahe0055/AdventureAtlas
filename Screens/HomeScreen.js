import { StyleSheet, Text, View, Image } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../assets/AdventureAtlas-logo.png")}
      />
      <Text style={styles.text}>Velkommen til Hjem side</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Hvid baggrund
    alignItems: "center", // Elementer placeres i midten af skærm
    justifyContent: "flex-start",
    paddingTop: 30, // Aftstand fra top af skærm
  },
  img: {
    width: 180,
    height: 180,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
