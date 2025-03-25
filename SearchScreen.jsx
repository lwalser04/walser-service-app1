import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Alert} from 'react-native';

//Icons used in the app (import)
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function SearchScreen({navigation}){

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

          <View style = {styles.greyBox}></View>

          <View style = {styles.bottomBox}>
  
             <TouchableOpacity onPress = {() => navigation.navigate("Home")}>
                  <Ionicons style = {styles.bottomIcons} name = 'home' size = {30} color = "white"></Ionicons>
             </TouchableOpacity>
              
             <TouchableOpacity onPress = {() => navigation.navigate("Search")}>
                 <Ionicons style = {styles.bottomIcons} name = 'search-sharp' size = {30} color = "white"></Ionicons>
             </TouchableOpacity>
              
             <TouchableOpacity onPress = {() => navigation.navigate("Accounts")}>
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
      backgroundColor : '#EFEFEF',
  
    },
  
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
  
  
  });