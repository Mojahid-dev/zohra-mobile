
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container} >
      <Text style={styles.textDesign}>How are you?</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#857d7d',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDesign: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
  linkDesign: {
    color: "red",
    fontSize: 25,
    textDecorationLine: "underline",
  }
})