import { View, Text, StyleSheet } from "react-native";

export default function about() {
    return (
        <View style={styles.container}>
            <Text style={styles.textColor}>This is the about page of my app.</Text>
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
    textColor: {
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold',
    }

})