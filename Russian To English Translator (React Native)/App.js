import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import SavedScreen from './screens/SavedScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
        screenOptions={{ headerShown: false }}
      <Tab.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Translate"
        }}
      />

      <Tab.Screen 
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarLabel: "Favourites"
        }}
      />

      <Tab.Screen 
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings"
        }}
      />
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator();
export default function App() {
  return (
  <NavigationContainer>
    <View> style= {{ flex: 1 }}
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen 
          name="Home"
          component={TabNavigator}
          options={{
             headerTitle: "Translate",
             tabBarIcon: (props) => <MaterialIcons name="g-translate" size={24} color={props.color} />
          }}
          />

           <Stack.Screen 
          name="Saved"
          component={SavedScreen}
          options={{
             headerTitle: "Favourites",
             tabBarIcon: (props) => <AntDesign name="heart" size={24} color={props.color} />
            }}
            />

         <Stack.Screen 
          name="Settings screen"
          component={SettingsScreen}
          options={{
             headerTitle: "Settings",
             tabBarIcon: (props) => <Ionicons name="settings-sharp" size={24} color={props.color} />
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </View>
    </NavigationContainer>
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
