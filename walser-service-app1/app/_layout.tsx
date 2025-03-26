import { Stack } from "expo-router";

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import logo from '../assets/images/Walser-Box-Logo-1500x632.jpg';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'; // adjust path if needed

export default function App({}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignUp = async () => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        Alert.alert('Success', `Account created for ${user.email}`);
      } catch (error) {
        Alert.alert('Error', error.message);
      }
    };
    const handlePress = (arg) => {
        Alert.alert('Moving to the ' + arg + ' page');
      };
    
    return(

         <View style = {styles.container}>
                  <View style = {styles.topBlackBox}>
                      <Image source = {logo} style = {styles.walserLogo}></Image>
                      <TouchableOpacity onPress = {() => handlePress('info')}>
                        <Ionicons  style = {styles.informationIcon} name = "information-circle-outline" size ={30} color = "white"></Ionicons>
                      </TouchableOpacity>
                  </View>
                  <View style = {styles.greyBox}><View style={styles.formContainer}>
        <Text style={styles.formTitle}>Create an Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
                  <View style = {styles.bottomBox}>
          
                     <TouchableOpacity onPress = {() => handlePress("Home")}>
                        <Ionicons style = {styles.bottomIcons} name = 'home' size = {30} color = "white"></Ionicons>
                     </TouchableOpacity>
                      
                    <TouchableOpacity onPress = {() => handlePress("Search")}>
                         <Ionicons style = {styles.bottomIcons} name = 'search-sharp' size = {30} color = "white"></Ionicons>
                    </TouchableOpacity>
                      
                    <TouchableOpacity onPress = {() => handlePress("Accounts")}>
                        <Ionicons style = {styles.bottomIcons} name = 'person-sharp' size = {30} color = "white"></Ionicons>
                    </TouchableOpacity>
          
          
                  </View>
                
                </View>
          
              
    );
}

// Corrected style name and added styles
const styles = StyleSheet.create({
    container: {
      flex: 1, // Takes up full height
      flexDirection: 'column',
      backgroundColor: 'black',
      
      
    },
  
    topBlackBox: {
      flex:2,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginLeft: -10,
      marginBottom: 7,
      flexDirection: 'row',
    },
  
    greyBox: {
      flex: 22,
    backgroundColor: '#EFEFEF',},
  
    bottomBox: {
      flex: 3,
      backgroundColor: 'black',
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginLeft: 100,
    },
  
    walserLogo: {
      height: 100,
      width: 170,
      marginRight: 150,
    },
  
    informationIcon: {
      marginTop: 34,
    },
  
    bottomIcons: {
      marginRight: 100
    },
    formContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    
    formTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    
    input: {
      height: 48,
      width: '100%',
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 12,
      paddingHorizontal: 12,
      borderRadius: 6,
      backgroundColor: 'white',
    },
    
    signUpButton: {
      backgroundColor: '#000',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 6,
    },
    
    signUpButtonText: {
      color: '#fff',
      fontSize: 16,
    }
  
  });