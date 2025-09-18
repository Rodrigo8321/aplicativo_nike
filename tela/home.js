import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Página Inicial</Text>
      <Button title="Ver Produto" onPress={() => navigation.navigate('Product')} />
      <Button title="Carrinho" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
}