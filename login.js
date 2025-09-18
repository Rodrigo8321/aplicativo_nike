import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* Imagem do tênis */}
      <Image
        source={require('../assets/images/nike-shoe-blue.png')} // Substitua com sua imagem
        style={styles.shoeImage}
        resizeMode="contain"
      />

      {/* Logo da Nike */}
      <Text style={styles.logo}>NIKE</Text>

      {/* Título */}
      <Text style={styles.title}>LOGIN</Text>

      {/* Campos de entrada */}
      <TextInput
        placeholder="E-MAIL"
        placeholderTextColor="#999"
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="SENHA"
        placeholderTextColor="#999"
        style={styles.input}
        secureTextEntry
      />

      {/* Botão de login */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  shoeImage: {
    width: 250,
    height: 150,
    marginBottom: 10,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});