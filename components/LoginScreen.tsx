import { StyleSheet,View,Text,TextInput,TouchableOpacity} from "react-native"
import { Center, Image } from "native-base"
import React from "react"
import AntDesign from 'react-native-vector-icons/AntDesign';


const LoginScreen = ({ navigation }) => {
  let dont = `Don't have an account ? You can register here.`
  let reg = `register`
  const [securepassword, setSecurepassword] = React.useState(true);
  return (
    <View style={styles.container}>
      <Center>
        <Image source={require('../assets/images/logo.png')} style={{width:175,height: 50}} alt="logo"/>
    <Text style={{marginTop: 15}}>Welcome Back</Text>
        <Text>If You don't have an account, create account here.</Text>
        <TouchableOpacity onPress={() => { navigation.navigate("RegisterScreen"); console.log("Register page") }}><Text style={styles.smallbutton}>Register</Text></TouchableOpacity>
    <Text>or</Text>

        <Text style={styles.titleheading}>Log In</Text>
        </Center>
      <Center>
     <TextInput style={styles.logininput} placeholder="Email Address"/>
        <TextInput style={styles.logininput} placeholder="Password" secureTextEntry={securepassword} />
        <AntDesign onPress={() => setSecurepassword(!securepassword)} style={{ position: 'absolute', bottom: 100, left: 315 }} name={securepassword ? 'eye' : 'eyeo'} size={25} />
        
       
      
        <TouchableOpacity><Text style={styles.addtocart}>Login</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{padding: 2, borderBottomWidth: 1,marginTop: 15}}>Forgot Password</Text></TouchableOpacity>
       </Center>
    </View>
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
     fontSize: 25
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

export default LoginScreen