import { View, Text, Button } from 'react-native';

export default function ProductScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Produto Nike</Text>
      <Button title="Adicionar ao Carrinho" onPress={() => navigation.navigate('Cart')} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}