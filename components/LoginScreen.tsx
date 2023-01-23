import { StyleSheet,View,Text,TextInput,TouchableOpacity} from "react-native"
import { Center, Image } from "native-base"
import React from "react"
import AntDesign from 'react-native-vector-icons/AntDesign';


const LoginScreen = ({ navigation }) => {
  let dont = `Don't have an account ? You can register here.`
  let reg = `register`
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [securepassword, setSecurepassword] = React.useState(true);
  const [loginstatus, setLoginstatus] = React.useState(false);
  const [errorstatus, setErrorstatus] = React.useState('');
  const sumbitLogin = () => {
    fetch('https://api.october.com.mm/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
    
      }),
     
    })
      .then((response) => response.json())
      .then(data => {
        console.log(data.success)
        if (data.success === true) {
          setErrorstatus('You are log in now !')
          console.log('You are log in now !');
          setLoginstatus(true);
          navigation.navigate("TopBarReborn");
        } else {
          setErrorstatus('Something is wrong. Check your email or password.')
          console.log('Something is wrong. Check your email or password.');
        }
        
      }).catch((e) => console.log(e))
        
    console.log(errorstatus);
  
  }
  return (
    <View style={styles.container}>
      <Center>
        <Image source={require('../assets/images/logo.png')} style={{width:175,height: 50}} alt="logo"/>
        <Text style={styles.titleheading}>Log In</Text>
        </Center>
      <Center>
        
     <TextInput style={styles.logininput} placeholder="Email Address" onChangeText={(text)=> setEmail(text)}/>
        <TextInput style={styles.logininput} placeholder="Password" secureTextEntry={securepassword} onChangeText={(text)=> setPassword(text)}/>
        <AntDesign onPress={() => setSecurepassword(!securepassword)} style={{ position: 'absolute', bottom: 190, left: 315 }} name={securepassword ? 'eye' : 'eyeo'} size={25} />
        
       
        <Text style={{position:'absolute',bottom: 280,color:'red'}}>{errorstatus}</Text>
        <TouchableOpacity onPress={()=> sumbitLogin()}><Text style={styles.addtocart}>Login</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{ padding: 2, borderBottomWidth: 1, marginTop: 15 }}>Forgot Password</Text></TouchableOpacity>
        <Text style={{marginTop: 30}}>If You don't have an account, create account </Text>
        <TouchableOpacity onPress={() => {
        
          navigation.navigate("RegisterScreen");
          console.log("Register page")

        }}><Text style={styles.smallbutton}>Register</Text></TouchableOpacity>
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