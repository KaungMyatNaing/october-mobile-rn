
import { StyleSheet,View,Text,TextInput,TouchableOpacity} from "react-native"
import { Center, Image , HStack, VStack } from "native-base"
import React, { useEffect } from "react"
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';

const OTPScreen = ({ navigation }) => {
  const [seconds, setSeconds] = React.useState(0);
  const [rsbutton, setRsbutton] = React.useState(false);
//  const secondCounter = () => {
//    const timer = setInterval(() => setTime(prev => prev - 1), 1000);
//    if (time < 0 || time == 0) {
//      clearInterval(timer);
//      setTime(0);
//      setRsbutton(false);
//
//    }
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
  
      if (seconds === 0) {
        
        clearInterval(interval);
        setRsbutton(false);
      } 
      
    }, 1000);
  
    return () => {
      clearInterval(interval);
    };
  }
    , [seconds])
  
  return (
    <>
      <View style={styles.container}>
      <HStack marginY={2} marginX={2} alignItems='flex-start' style={{width:'100%'}}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <IonIcons name='chevron-back' size={32} />
        </TouchableOpacity>
       
         </HStack>
        <VStack space={3} justifyContent='center' alignItems='center'>
        <IonIcons name='lock-open-outline' size={50} />
          <Text style={{ fontSize: 20 }}>Your account creation is almost done. Just only one step left !</Text>
          <Text>A verification code has been sent to your email address.</Text>
          <HStack space={5}><TextInput style={styles.inputStyle} placeholder="Enter OTP"></TextInput><TouchableOpacity><Text  style={styles.smallbutton}>Verify</Text></TouchableOpacity></HStack>
          <Text style={{marginTop: 15}}>Please try again after {seconds} seconds.</Text>
          <HStack space={10} justifyContent='center' alignItems='center'><Text>Not getting OTP code ?</Text><TouchableOpacity disabled={rsbutton} onPress={() => {
            setSeconds(10);
            setRsbutton(true);
           
          }}><Text style={rsbutton ? styles.smallbuttondisable : styles.smallbutton} 
          >Re send</Text></TouchableOpacity></HStack>
          
          </VStack>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 8,
   
  },
  inputStyle: {
    borderWidth: 1,
    width: 150
  },
  smallbutton:{
    padding: 10,
    width: 100,
    backgroundColor: '#FF6195',
    borderRadius: 15,
    color: '#FFEDF5',
    marginTop: 5,
    fontFamily: 'GothamPro-Bold',
    textAlign: 'center',
  
  },
  smallbuttondisable: {
    padding: 10,
    width: 100,
    backgroundColor: '#FF6195',
    borderRadius: 15,
    color: '#FFEDF5',
    marginTop: 5,
    fontFamily: 'GothamPro-Bold',
    textAlign: 'center',
    opacity: 0.6
  }
})
export default OTPScreen