import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationProvider } from '@react-navigation/native';

export default function App() {
  return (
  <NavigationProvider>
    <View style={styles.container}>
      <Text>Russian To English Translate</Text>
      <StatusBar style="auto" />
    </View>
    </NavigationProvider>
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
