import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
    {
      name: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
      },
      namephone: {
        marginTop: 10,
        marginVertical: 10,
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
      },
      description: {
        marginTop: 5,
        marginHorizontal: 30,
      },
      nameHistory: {
        marginTop: 20,
        marginHorizontal: 30,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
      },
      descriptionHistory: {
        textAlign: 'center',
        marginTop: 5,
        marginHorizontal: 30,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
      },
      information: {
        textAlign: 'center',
        padding: 30,
        fontSize: 20,
        color: 'black',
      },
      cabecera: {
        marginTop: 30,
        textAlign: 'center',
        fontSize: 20,
        color: 'black'
      },
      instrument: {
        textAlign: 'center',
        fontSize: 20,
        color: 'red',
      },
      sexoLogo: {
        padding: 40,
        marginHorizontal: 10,
        width: 50, 
        height: 50,
      },
      tinyLogo: {
        padding: 40,
        marginHorizontal: 80,
        width: 200, 
        height: 200
      },
      users: {
        flexDirection: 'row',
        padding:10
      },
      search: {
        flexDirection: 'row',
        padding:30,
      },
      columntext: {
        flex: 2,
        padding:10,
      },
      divider: {
        layout_width: 'match_parent',
        layout_height: 5,
        color: 'black',
      },
      instru: {
        fontSize: 20,
        color: 'black',
      },
      bt: {
        marginHorizontal: 150
      },
      boton: {
        paddingTop: 8,
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'blue',
        borderRadius: 200,
        width: 100,
        height: 40
      },
      FList: {
        flex: 2
      },
      linea: {
        textAlign: 'center',
        color: 'blue'
      },
      input: {
        // flex: 3,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        borderWidth: 1,
        height: 50,
        width: 200
      }
    }
)

export default styles;