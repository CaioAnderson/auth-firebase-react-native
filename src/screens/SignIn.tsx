import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import AuthContext from '../contexts/auth';

export default function SignIn() {

  const { signed, signIn } = useContext(AuthContext);

  console.log(signed);

  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const email = 'caioandeanderson022@gmail.com';
  const senha = 'caio100';


  async function handleSignIn() {
   
    setLoading(!loading);
    setDisabled(!disabled);
    await signIn(email, senha);
    setLoading(false);
    setDisabled(false);


  }

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.button} onPress={handleSignIn} disabled={disabled}>
          {!loading ?
            <Text style={styles.text}>Logar</Text> :
            <ActivityIndicator size='large' color="#fff" />
          }
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#174a68',
    alignItems: 'center',
    justifyContent: 'center',

    width: 200,
    height: 80,

    borderRadius: 20
  },
  text: {
    color: '#f0e9e9'
  }
})