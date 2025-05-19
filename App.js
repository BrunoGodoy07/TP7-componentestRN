import React, { useState, useEffect, useRef  } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  Alert,
  TouchableOpacity,
  Pressable,
  StatusBar,
  Animated 
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const backgroundImage = {
  uri: 'https://64.media.tumblr.com/2a6d7136713ed9dcb8f1732da82e1c9d/7d38262b39a0ad30-91/s500x750/5eaee3b509aca301cb02f60d698a1cba20457aea.png'
};

export default function App() {
  const [message, setMessage] = useState('');
  const [isPressed, setIsPressed] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }).start();
    }, []);


  return (
    <View style="pagina">
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <SafeAreaView style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.image} blurRadius={2}>
        <Animated.View style={[styles.card, { opacity: fadeAnim }]}>

            <Image source={require('./assets/mujer.png')} style={styles.profilePicture} />
            <Text style={styles.name}>Bruno Mattioda</Text>
            <Text style={styles.title}>Graphics Engineer</Text>

            <TextInput
              style={styles.input}
              placeholder="Escribí tu mensaje..."
              placeholderTextColor="#888"
              onChangeText={setMessage}
              value={message}
            />

            <TouchableOpacity
              style={styles.buttonContact}
              onPress={() => {
                if (message.trim() === '') {
                  Alert.alert('Error', 'Por favor escribí un mensaje antes de contactar.');
                } else {
                  Alert.alert('Mensaje enviado', `Tu mensaje: "${message}"`);
                }
              }}
            >
              <Text style={styles.buttonText}>Contactar</Text>
            </TouchableOpacity>

            <Pressable
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}
              style={[
                styles.buttonPortfolio,
                isPressed && styles.buttonPortfolioPressed
              ]}
            >
              <Text style={[styles.buttonText, isPressed && styles.textPressed]}>
                Ver Portfolio
              </Text>
            </Pressable>
          </Animated.View>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    backgroundColor: 'white',
    width: '85%',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 6
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333'
  },
  title: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
    fontSize: 14
  },
  buttonContact: {
    backgroundColor: '#acabc3',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  buttonPortfolio: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center'
  },
  buttonPortfolioPressed: {
    backgroundColor: '#ddd'
  },
  textPressed: {
    color: '#333'
  }
});
