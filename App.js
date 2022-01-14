import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HistoriaPantalla from './src/containers/HistoriaPantalla';
import UsuariosStackScreen from './src/navigation/UsuariosStackScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (

    <NavigationContainer>

      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Musicos') {
              iconName = focused ? 'ios-information-circlq' : 'ioq-informatioq-circle-outline';
            } else if (route.name === 'Historia') {
              iconName = focused ? 'ios-filter' : 'ios-filter-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarStyle: {
            backgroundColor: 'aqua'
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'white',
        })}
      >

        <Tab.Screen name="Historia" component={HistoriaPantalla}
          options={{
            title: 'Historia',
           headerStyle: {
              backgroundColor: 'aqua',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }} />
        <Tab.Screen options={{ headerShown: false }} name="Musicos" component={UsuariosStackScreen} />

      </Tab.Navigator>
    </NavigationContainer>


  )
}
export default App;