import { View, Text, Button } from 'react-native';

export default function CartScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Seu Carrinho</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}