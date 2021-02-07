import React, { useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import * as api from '../api/Firebase';

export default function SignOut() {

    const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const email = 'caioandeanderson022@gmail.com';
  const senha = 'caio100';


   function handleSignOut() {
    //    api.signIn(email, senha).then((response) => {
    //         console.log(response)
    //    });

      
    // setLoading(!loading);
    // setDisabled(!disabled);
    // await api.createUser(email, nome, senha);
    // setLoading(false);
    // setDisabled(false);
    // navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>

      <View>
        <TouchableOpacity style={styles.button} onPress={handleSignOut} disabled={disabled}>
          {!loading ?
            <Text style={styles.text}>SignOut</Text> :
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