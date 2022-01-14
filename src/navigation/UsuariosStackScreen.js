import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsuariosPantalla from '../containers/UsuariosPantalla';
import DetalleUsuarioPantalla from '../containers/DetalleUsuarioPantalla';

const HomeStack = createNativeStackNavigator();

function UsuariosStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Musicos" component={UsuariosPantalla}
          options={{
            title: 'Listado de usuarios',
            headerStyle: {
              backgroundColor: 'aqua',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }} />
        <HomeStack.Screen name="Detalles" component={DetalleUsuarioPantalla}
          options={{
            title: 'Listado de usuarios',
            headerStyle: {
              backgroundColor: 'aqua',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }} />
      </HomeStack.Navigator>
    );
}

export default UsuariosStackScreen;