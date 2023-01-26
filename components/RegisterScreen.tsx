import { StyleSheet,View,Text,TextInput,TouchableOpacity,TouchableHighlight} from "react-native"
import { Center,Image,HStack } from "native-base"
import { useState } from "react"
import React from "react"
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { useToast } from 'native-base';
import { StoreContext } from "./StoreContext";
const RegisterScreen = ({ navigation }) => {
  const [securepassword, setSecurepassword] = React.useState(true);
  const [securerepassword, setSecurerepassword] = React.useState(true);
  const toast = useToast();
  const [password, setPassword] = React.useState('');
  const [repassword, setRepassword] = React.useState('');
  const [samepassworderror, setSamepassworderror] = React.useState('');
  const [error, setError] = React.useState('');
  const [otpcode, setOtpcode] = React.useContext(StoreContext)
  const [registerlock, setRegisterlock] = React.useState(false);

  
  React.useEffect(() => {
    
    
  }, [])
  
  const registerUser = () => {
    fetch('https://api.october.com.mm/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'XYFHCGTE',
        email: 'gghjjjkjkghjjgbvc89879879666666nghbd@gmail.com',
        password: 'HGJG565',
    
      }),
     
    })
      .then((response) => response.json())
      .then(data => {
        console.log(data)
        setOtpcode(data.data.otp_code);
        if ("errors" in data) {
          console.log(`Something is wrong. Possible Causes 
    - Email is duplicate.
    - Your password is less than 8 characters.
    - Your password is not strong enough.
    `);
          setRegisterlock(false);
          
        } else {
          setRegisterlock(true);
          
        }
      }
    ).catch((e) => console.log(e))
       
  }
  return (
    <>
    <View style={styles.container}>
      
        <IonIcons name='chevron-back' size={32} color='black' style={{ position: 'absolute', top: 25 }} onPress={() => navigation.goBack()} />
        
          
        <Center>
        <Text style={{width: 250, color:'red'}}>
            {error}
          </Text>
        <Image source={require('../assets/images/logo.png')} style={{width:175,height: 50}} alt="logo"/>

        <Text style={styles.titleheading}>Register</Text>
        </Center>
      <Center>
      <TextInput style={styles.logininput} placeholder="Name"/>
        <TextInput style={styles.logininput} placeholder="Email Address" />
        <TextInput style={styles.logininput} placeholder="Password"  onChangeText={newText => setPassword(newText)} secureTextEntry={securepassword} />
        <AntDesign onPress={() => setSecurepassword(!securepassword)} style={{ position: 'absolute', bottom: 230, left: 315 }} name={securepassword ? 'eye' : 'eyeo'} size={25} />
        
       
       
          <TextInput style={styles.logininput} placeholder="Re-enter Your Password" onChangeText={newText => setRepassword(newText)}  secureTextEntry={securerepassword} />
          <Text style={{ color: 'red',position:'absolute' }}>{samepassworderror}</Text>
        <AntDesign onPress={() => setSecurerepassword(!securerepassword)} style={{ position: 'absolute', bottom: 168, left: 315 }} name={securerepassword ? 'eye' : 'eyeo'} size={25} />
        
       

          <TouchableOpacity disabled={registerlock} onPress={() => {
            setRegisterlock(true);
            //if (password !== repassword) {
            //  setSamepassworderror("Your password is not the same.")
            //} else {
            fetch('https://api.october.com.mm/api/auth/register', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name: 'XYFHCGTE',
                email: 'gghjgjjkkjhmnbvvvvnooybhvghvv65768657575764397542166vkhkjhbvaqhbd@gmail.com',
                password: 'HGJG565',
              
              }),
               
            })
              .then((response) => response.json())
              .then(data => {
                setRegisterlock(false);
                console.log(data)
                  
                //  let edata = Object.keys(data.errors);
                //  console.log(edata);
                //   if (edata.includes("email")) {
                //    console.log("Email issues")
                //  }
                //  else if (edata.includes("password")) {
                //    console.log("Password issues")
                //  }
                //  else if (edata.includes("password") && edata.includes("password")) {
                //    console.log("Email issues");
                //    console.log("Email issues")
                //  }
                if ("errors" in data) {
                  console.log(`Something is wrong. Possible Causes 
              - Email is duplicate.
              - Your password is less than 8 characters.
              - Your password is not strong enough.
              `);
                  setError(`Something is wrong. Possible Causes 
              - Email is duplicate.
              - Your password is less than 8 characters.
              - Your password is not strong enough.
              `);
                }
                //      
                //      
                //      
                else {
                  setOtpcode(data.data.otp_code);
                  console.log("OTP Code Set")
                  navigation.navigate('OTPScreen')
                      
                }
              }
            
              
              
              ).catch((e) => console.log(e))
           
          }
           
            
        }><Text style={registerlock ? styles.addtocartdisable : styles.addtocart}>Register</Text></TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate('OTPScreen')}>
        
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
  addtocartdisable: {
    padding: 10,
    width: 300,
    backgroundColor: '#FF6195',
    borderRadius: 15,
    color: '#FFEDF5',
    marginTop: 15,
    fontFamily: 'GothamPro-Bold',
    textAlign: 'center',
    opacity: 0.6
    
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