import React, { useState } from 'react';
import { Text, View, Image, FlatList, TextInput, TouchableOpacity } from 'react-native';
import users from "./data";
import styles from '../styles/styles';

function UsuariosPantalla({ navigation }) {

  const [instrumento, setInstrumento] = useState();
  
  function imagen(sexo){
    if ('Masculino'===sexo) 
      return <Image style={styles.sexoLogo} source={ require('../imagenes/hombre.png')}/>
    else if('Femenino'===sexo) 
      return <Image style={styles.sexoLogo} source={ require('../imagenes/mujer.png')}/>
  }
  
  function renderItem(item) {
  
    return (
      <View>
        <View style={styles.users}>
          {imagen(item.genero)}
          <Text style={styles.columntext}>
            <Text style={styles.information}>{item.nombre} </Text>
            <Text>                                   </Text>
            <Text style={styles.instrument}> {item.instrumento} </Text>
          </Text>
        </View>
        <View>
          <Text  style={styles.linea}>_______________________________________________________</Text>
        </View>
      </View>
    );
  }
  
  return (
    <View style={styles.FList}>
      <View style={styles.search}>
        <Text style={styles.instru}> Instrumento </Text>
        <TextInput style={styles.input} onChangeText={instrumento => setInstrumento(instrumento)} />
      </View>
      <TouchableOpacity
        style={styles.bt}
        onPress={() => navigation.navigate('Detalles', { instrumento: instrumento })}
      >
        <Text style={styles.boton}>Buscar</Text>
      </TouchableOpacity>
      <FlatList 
        data={users}
        renderItem={({ item }) => (<View>{renderItem(item)}</View>)}
      />
    </View>
  );
}

export default UsuariosPantalla;