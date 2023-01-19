import { StyleSheet,View,Text,TextInput,TouchableOpacity,TouchableHighlight} from "react-native"
import { Center,Image,HStack } from "native-base"
import { useState } from "react"
import React from "react"
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';
const RegisterScreen = ({ navigation }) => {
  const [securepassword, setSecurepassword] = React.useState(true);
  const [securerepassword,setSecurerepassword] = React.useState(true);
  return (
    <>
    <View style={styles.container}>
      
          <IonIcons name='chevron-back' size={32} color='black' style={{position: 'absolute', top: 25}} onPress={() => navigation.goBack()}/>
       
      <Center>
        <Image source={require('../assets/images/logo.png')} style={{width:175,height: 50}} alt="logo"/>

        <Text style={styles.titleheading}>Register</Text>
        </Center>
      <Center>
      <TextInput style={styles.logininput} placeholder="Name"/>
        <TextInput style={styles.logininput} placeholder="Email Address" />
        <TextInput style={styles.logininput} placeholder="Password" secureTextEntry={securepassword} />
        <AntDesign onPress={() => setSecurepassword(!securepassword)} style={{ position: 'absolute', bottom: 230, left: 315 }} name={securepassword ? 'eye' : 'eyeo'} size={25} />
        
       
       
        <TextInput style={styles.logininput} placeholder="Re-enter Your Password" secureTextEntry={securerepassword} />
        <AntDesign onPress={() => setSecurerepassword(!securerepassword)} style={{ position: 'absolute', bottom: 168, left: 315 }} name={securerepassword ? 'eye' : 'eyeo'} size={25} />
        
       

        <TouchableOpacity><Text style={styles.addtocart}>Register</Text></TouchableOpacity>

        <TouchableOpacity>
        
          <Text style={styles.googlebutton}>Continue with Google</Text>
          <AntDesign size={25} name="google"  style={{position:'absolute', bottom: 5, left: 25}} />
         
        </TouchableOpacity>

        <TouchableOpacity><Text style={styles.facebookbutton}>Continue with Facebook</Text>
        <AntDesign size={25} name="facebook-square"  style={{position:'absolute', bottom: 5, left: 25}} color='white' />
        </TouchableOpacity>
    
       </Center>
      </View>
      </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: 8,
    textAlign: 'center'
  },
  titleheading:{
     color: '#FF6195',
    fontSize: 25,
     marginTop: 15
  }, 
  addtocart: {
    padding: 10,
    width: 300,
    backgroundColor: '#FF6195',
    borderRadius: 15,
    color: '#FFEDF5',
    marginTop: 15,
    fontFamily: 'GothamPro-Bold',
    textAlign:'center'
    
  },
  googlebutton: {
    padding: 10,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 15,
    color: 'black',
    marginTop: 15,
    fontFamily: 'GothamPro-Bold',
    textAlign: 'center',
    borderWidth: 1
    
  },
  facebookbutton: {
    padding: 10,
    width: 300,
    backgroundColor: '#1877F2',
    borderRadius: 15,
    color: '#FFEDF5',
    marginTop: 15,
    fontFamily: 'GothamPro-Bold',
    textAlign:'center'
    
  },
  smallbutton:{
    padding: 10,
    width: '80%',
    backgroundColor: '#FF6195',
    borderRadius: 15,
    color: '#FFEDF5',
    marginTop: 5,
    fontFamily: 'GothamPro-Bold',
    textAlign:'center'
  },
  logininput: {
     padding: 10,
    width: '80%',
    backgroundColor: 'transparent',
    borderRadius: 5,
     marginTop: 15,
    fontFamily: 'GothamPro-Bold',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  opacity: 0.8,
    textAlign:'left'

  },
  hview:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  }
})

export default RegisterScreen