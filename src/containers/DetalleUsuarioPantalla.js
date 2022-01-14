import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import users from "./data";
import styles from '../styles/styles';

function DetalleUsuarioPantalla({ route }) {

  const {instrumento} = route.params;
  
  function imagen(sexo){
    if ('Masculino'===sexo) 
      return <Image style={styles.sexoLogo} source={ require('../imagenes/hombre.png')}/>
    else if('Femenino'===sexo) 
      return <Image style={styles.sexoLogo} source={ require('../imagenes/mujer.png')}/>
  }
  
  function renderItem(instrumento, item) {
  
    if (instrumento === item.instrumento)
      return (
        <View>
          <Text style={styles.cabecera}> {item.nombre} </Text>
          <View style={styles.users}>
            {imagen(item.genero)}
            <Text style={styles.columntext}>
              <View>
              <Text>
                <Text style={styles.name}>Edad:  </Text> 
                <Text style={styles.information}> {item.edad}     </Text>
              </Text>
              </View>
              <View>
              <Text>
                <Text style={styles.name}>Ciudad:</Text>
                <Text style={styles.information}> {item.ciudad}    </Text>
              </Text>
              </View>    
              <View>
                <Text style={styles.instrument}> {item.instrumento} </Text>                                          
              </View>
            </Text>
          </View>
          <View>
            <Text style={styles.linea}>_________________________________________________________</Text>
          </View>
        </View>
      );
  }
  
  return (
    <View style={styles.view}>
      <FlatList
        data={users}
        renderItem={({ item }) => (<View>{renderItem(instrumento, item)}</View>)}
      />
    </View>
  );
}

export default DetalleUsuarioPantalla;