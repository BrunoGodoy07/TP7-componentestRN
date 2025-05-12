import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, Button, Alert } from 'react-native';
import React from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

export default function App() {
  const [reseña, handleReseñaChange] = React.useState('');
  return (
    <SafeAreaProvider>
    <StatusBar style='light'/>
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.titulo}>Mi tarjeta personal interactiva</Text>
          <View style={styles.card}>
            <Image source={require('./assets/mujer.png')} style={styles.profilePicture}/>
            <Text style={styles.text}>Nombre: Bruno</Text>
            <Text style={styles.text}>Apellido: Mattioda</Text>
            <Text style={styles.text}>Titulo: Graphics Engineer</Text>
            <Text style={styles.text}>Pon tu reseña!</Text>
            <TextInput 
            style={styles.input}
            placeholder='ingrese...'
            onChangeText={handleReseñaChange}
            value={reseña}></TextInput>
            <Text style={styles.text}>Envia tu reseña!</Text>
            <Button 
            title='Enviar'
            onPress={() => Alert.alert('Tu reseña a sido enviada.')}> 
            </Button>
          </View> 
      </ImageBackground>  
    </SafeAreaView>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },
    titulo: {
    color: 'white',
    fontSize: 36,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
    paddingTop: '25'
  },
  card: {
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '50' ,
    width: '80%',
    height: '70%'
  },
  text:{
    color: 'black',
    fontSize: 16,
    lineHeight: 44,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profilePicture:{
    width: '40%',
    height: '30%'
  },
  input: {
    height: 40,
    borderWidth: 2,
    padding: 1,
    width: '70%',
  },

});
