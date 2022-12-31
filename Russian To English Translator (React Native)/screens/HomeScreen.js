import { Button, ProgressViewIOSComponent, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Translate</Text>

      <Button title='Enter Text' onPress={() => {
          Props.navigation.navigate("Settings screen")
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
