import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  StatusBar,
  Alert,
  StyleSheet
} from 'react-native';

const backgroundImage = {
  uri: 'https://media1.tenor.com/m/4gpAcd6L6SsAAAAC/minecraft-minecraft-movie.gif'
};

const profilePhoto = {
  uri: 'https://cdn-icons-png.flaticon.com/512/2922/2922561.png' 
};

const iconLinks = [
  {
    uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png', 
    alt: 'GitHub'
  },
  {
    uri: 'https://cdn-icons-png.flaticon.com/512/145/145807.png', 
    alt: 'LinkedIn'
  },
  {
    uri: 'https://cdn-icons-png.flaticon.com/512/561/561127.png', 
    alt: 'Email'
  },
  {
    uri: 'https://cdn-icons-png.flaticon.com/512/455/455705.png', 
    alt: 'Teléfono'
  }
];

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [message, setMessage] = useState('');
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    if (message.trim() === '') {
      Alert.alert('Mensaje vacío', 'Por favor escribe un mensaje antes de enviar.');
    } else {
      Alert.alert('Mensaje enviado', `Tu mensaje fue: "${message}"`);
      setMessage('');
    }
  };

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Text style={styles.splashText}>Cargando perfil...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <SafeAreaView style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.image} blurRadius={2}>
          <View style={styles.card}>
            <Image source={profilePhoto} style={styles.profileImage} />

            <Text style={styles.name}>Jesica González</Text>
            <Text style={styles.title}>Desarrolladora Frontend</Text>

            <View style={styles.iconRow}>
              {iconLinks.map((icon, index) => (
                <Image key={index} source={{ uri: icon.uri }} style={styles.icon} />
              ))}
            </View>

            <Pressable
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}
              style={[styles.portfolioButton, isPressed && styles.buttonPressed]}
            >
              <Text style={[styles.portfolioText, isPressed && styles.textPressed]}>
                Ver Portfolio
              </Text>
            </Pressable>

            <TextInput
              style={styles.input}
              placeholder="Escribe un mensaje..."
              placeholderTextColor="#888"
              onChangeText={setMessage}
              value={message}
            />

            <TouchableOpacity style={styles.contactButton} onPress={handleSend}>
              <Text style={styles.contactText}>Contactar</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center'
  },
  splashText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold'
  },
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f1f3f',
    marginBottom: 5
  },
  title: {
    fontSize: 14,
    color: '#444',
    fontStyle: 'italic',
    marginBottom: 15
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 8
  },
  portfolioButton: {
    backgroundColor: '#1f1f3f',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center'
  },
  buttonPressed: {
    backgroundColor: '#333'
  },
  portfolioText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  textPressed: {
    color: '#ddd'
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
    marginBottom: 15
  },
  contactButton: {
    backgroundColor: '#6366f1',
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center'
  },
  contactText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
