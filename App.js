import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const App = () => {
  const [password, setPassword] = useState('');

  const doLogin = () => {
    // PROBLEMA: Senha embutida no código
    const hardcodedPassword = "senha_secreta_123"; 

    if (password === hardcodedPassword) {
      Alert.alert("Sucesso!", "Login realizado com sucesso!");
    } else {
      Alert.alert("Erro", "Senha incorreta.");
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