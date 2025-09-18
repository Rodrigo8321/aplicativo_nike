import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';

export default function ProductScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Miniaturas de modelos */}
      <View style={styles.thumbnailContainer}>
        <View style={[styles.thumbnailBox, styles.selectedThumbnail]}>
          <Image source={require('../assets/images/kyrie-infinity.png')} style={styles.thumbnailImage} />
        </View>
        <View style={styles.thumbnailBox}>
          <Image source={require('../assets/images/air-force-1.png')} style={styles.thumbnailImage} />
        </View>
        <View style={styles.thumbnailBox}>
          <Image source={require('../assets/images/multicolor-shoe.png')} style={styles.thumbnailImage} />
        </View>
      </View>

      {/* Imagem principal */}
      <Image source={require('../assets/images/kyrie-infinity.png')} style={styles.mainImage} resizeMode="contain" />

      {/* Nome e categoria */}
      <Text style={styles.title}>KYRIE INFINITY</Text>
      <Text style={styles.category}>Calçados para Basquete</Text>

      {/* Descrição */}
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae porta ante. Suspendisse a massa vitae justo lacinia accumsan.
      </Text>

      {/* Preço */}
      <Text style={styles.price}>Preço $799</Text>

      {/* Ícones de ação */}
      <View style={styles.iconRow}>
        <TouchableOpacity style={styles.iconButton}>
          <Feather name="share" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconButton, { backgroundColor: '#4CAF50' }]}>
          <Ionicons name="cart" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="heart" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  thumbnailContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  thumbnailBox: {
    width: 60,
    height: 60,
    backgroundColor: '#eee',
    marginHorizontal: 5,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedThumbnail: {
    backgroundColor: '#FFD700',
  },
  thumbnailImage: {
    width: 50,
    height: 50,
  },
  mainImage: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 5,
  },
  category: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 20,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  iconButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 30,
    marginHorizontal: 5,
  },
});
