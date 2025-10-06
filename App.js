import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

// Importa a variável de ambiente (ex: usando react-native-dotenv)
// import { API_PASSWORD } from '@env'; 

const App = () => {
  const [password, setPassword] = useState('');

  const doLogin = () => {
    // CORREÇÃO: Credenciais não são mais embutidas no código.
    // Em uma aplicação real, a senha seria validada em um servidor.
    // Para esta demo, podemos simular a validação ou usar uma variável de ambiente.
    if (password.length >= 6) { // Exemplo de validação simples
      Alert.alert("Sucesso!", "A validação da senha pode ser feita em um servidor.");
    } else {
      Alert.alert("Erro", "Senha deve ter pelo menos 6 caracteres.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Análise com SonarQube</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={doLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default App;