import { ImageBackground, StyleSheet,Text,TouchableOpacity,View,Image } from "react-native"
import { Box, VStack, Container, Center, HStack } from "native-base"
import SwiperSplashScreen from "./SwiperSplashScreen"
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from "react";
const SplashScreen = ({ navigation }) => {
  const [firsttime, setFirsttime] = React.useState(true);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('firstTime')
      if (value !== null) {
        console.log('I read it');
        setFirsttime(false);
        //navigation.navigate("TopBarReborn")
        console.log('My navigation was successful')

      }
    } catch(e) {
      // error reading value
    }
  }
 
  getData()
  {
    if (firsttime == false) { 
      navigation.navigate("LoginScreen")
    } else {
      return (
        <>
          <View style={{ width: '100%', height: '100%',flex: 1}}>
          <Image source={require('../assets/images/logo.png')} style={{width:250,height: 125}} alt="logo"/>
    
            <Text>
              Are you ready to expolre the beautiful world ?
            </Text>
            
            <TouchableOpacity onPress={async() => {
             
                try {
                  await AsyncStorage.setItem('firstTime', 'ok')
                  console.log('first time setted')
                  navigation.navigate("LoginScreen")
                } catch (e) {
                  // saving error
                }
              }
            
            }><Text style={styles.nextButton}>I am ready !</Text></TouchableOpacity>
             
              
            </View>
        </>
      )
    }
    
  }

 
}

const styles = StyleSheet.create({
  nextButton: {
    padding: 15,
    backgroundColor: 'black',
    color: 'white',
    width: 75,
    textAlign: 'center', 
    position: 'absolute',
    right: 10,
    bottom: 15
  }
})

export default SplashScreen