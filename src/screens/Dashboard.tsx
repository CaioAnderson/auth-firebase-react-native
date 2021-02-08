import React, { useContext } from 'react';
import AuthContext from '../contexts/auth';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function SignOut() {

  const { signOut, user } = useContext(AuthContext);


   function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>

      <View>
        <Text style={{alignSelf:'center'}}>{user?.nome}</Text>
        <TouchableOpacity style={styles.button} onPress={handleSignOut} >
            <Text style={styles.text}>SignOut</Text>
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