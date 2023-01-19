import { StyleSheet,Text,TouchableOpacity,View } from "react-native"
import { Box, VStack, Container, Center, HStack } from "native-base"
import SwiperSplashScreen from "./SwiperSplashScreen"
const SplashScreen = ({ navigation }) => {
  return (
    <>
      <View style={{width: '100%', height: '100%',position:'relative'}}>
        
        <SwiperSplashScreen />
        
           <TouchableOpacity onPress={()=> navigation.navigate("TopBarReborn")}><Text style={styles.nextButton}>Next</Text></TouchableOpacity>
         
       
        </View>
    </>
  )
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