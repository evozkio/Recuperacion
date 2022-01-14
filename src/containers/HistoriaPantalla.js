import React from 'react';
import { Text, Image, ScrollView } from 'react-native';
import styles from '../styles/styles';

function HistoriaPantalla() {
    return (
      <ScrollView >
  
        <Text style={styles.information}> Bienvenido a la historia de los dispositivos </Text>
  
        <Image
          style={styles.tinyLogo}
          source={ require('../imagenes/Xiaomipng.png')}
        />
        <Text style={styles.namephone}> Xiaomi MA1</Text>
        <Text style={styles.description}>
          <Text style={styles.nameHistory}>Fecha de lanzamiento:  </Text>
          <Text style={styles.information}> 2017 </Text>
        </Text>
        <Text style={styles.description}>
          <Text style={styles.descriptionHistory}>Historia:</Text>
          <Text style={styles.information}>Fue unos de los primeros telefonos chinos en pegarlo a lo grande dado 
          que fue uno telefono calidad/precio que era absurdo lo bueno que era por su precio
             </Text>
        </Text>
        <Text style={styles.description}>
          <Text style={styles.descriptionHistory}>Conclusión: </Text>
          <Text style={styles.information}> El gran comienzo de los telefonos chinos
             </Text>
        </Text>
  
        <Image
          style={styles.tinyLogo}
          source={ require('../imagenes/Nokia-3310.png')}
        />
        <Text style={styles.namephone}> Nokia 3310 </Text>
        <Text style={styles.description}>
          <Text style={styles.nameHistory}>Fecha de lanzamiento:  </Text>
          <Text style={styles.information}> 2000 </Text>
        </Text>
        <Text style={styles.description}>
          <Text style={styles.descriptionHistory}>Historia: </Text>
          <Text style={styles.information}>  El Nokia 3310 se anunció el 1 de septiembre de 2000, para ponerse a la venta en el
          cuarto trimestre de ese año. Era el sustituto del Nokia 3210, y para más de un joven o adolescente de aquella época,
          representó tener su primer celular e interactuar por primera vez con un juego móvil, claro, el de la serpiente. La firma
          finlandesa vendió un total de 126 millones de unidades de este equipo.
             </Text>
        </Text>
        <Text style={styles.description}>
          <Text style={styles.descriptionHistory}>Conclusión: </Text>
          <Text style={styles.information}> El telefono mas resisitente podria aguantar un meteorito
             </Text>
        </Text>
  
        <Image
          style={styles.tinyLogo}
          source={ require('../imagenes/iphone.png')}
        />
        <Text style={styles.namephone}> Iphone 1</Text>
        <Text style={styles.description}>
          <Text style={styles.nameHistory}>Fecha de lanzamiento:  </Text>
          <Text style={styles.information}> 2003 </Text>
        </Text>
        <Text style={styles.description}>
          <Text style={styles.descriptionHistory}>Historia: </Text>
          <Text style={styles.information}>  Carece de un teclado físico, integra uno en la pantalla táctil con orientaciones tanto
           vertical como horizontal. El iPhone de Primera Generación dispone de una cámara de fotos de 2 megapíxeles y un 
           reproductor de música basado en ITunes, además de software para enviar y recibir mensajes de texto y de voz. También 
           ofrece servicios de Internet como leer correo electrónico, cargar páginas web y conectividad por Wi-Fi. Los teléfonos de
            la primera generación eran GSM cuatribanda con la tecnología EDGE. La segunda generación ya incluía UMTS con HSDPA.2
            Apple anunció el iPhone en enero de 2007,3​ tras varios rumores y especulaciones que circulaban desde hacía meses.4​ El
            phone se introdujo a la venta inicialmente el 29 de junio de 2007.1​ Fue nombrado «Invento del año» por la revista Time
            en 2007.5​ Tuvo un precio de salida de 499 USD, solo disponible con la operadora AT&T en EE. UU.6​ 
          </Text>
        </Text>
        <Text style={styles.description}>
          <Text style={styles.descriptionHistory}>Conclusión: </Text>
          <Text style={styles.information}> Fue el comienzo de los Smartphone de Apple
          </Text>
        </Text>
  
      </ScrollView >
    );
}

export default HistoriaPantalla;