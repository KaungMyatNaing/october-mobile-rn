import React from "react";
import {StyleSheet,ImageBackground,TouchableOpacity,View,Text} from 'react-native'
import { VStack, HStack, Button, IconButton, Icon, NativeBaseProvider, Center, Box, StatusBar, Container,Input,Image } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";


const CatagoryBanner = (props : {catagory_name : string , img_url : string}) => {
  return (
    <Box marginX='3' height= '75' width='95%' marginBottom='85' >
      {/*<TouchableOpacity>*/}
      <ImageBackground source={{ uri: `https://www.api.octoberecommerce.duckdns.org/${props.img_url}` }}
       imageStyle={{height: 150, borderRadius: 15}}>
        
        <View style={{ width: '100%', height: 150,textAlign:'center',backgroundColor:'black', opacity: 0.5 , borderRadius: 15}}>
        
        </View>
        <Text style={styles.headingtitle}>{props.catagory_name}</Text>
        
        
            
     
     
      {/*<Image source={{
      uri: "https://wallpaperaccess.com/full/317501.jpg"}} alt="Alternate Text" size='lg' marginRight={5} marginY='3' borderRadius={10}/>*/}
       
        </ImageBackground>
        {/*</TouchableOpacity>*/}
  </Box>
  )
}
const styles = StyleSheet.create({
  headingtitle: {
    
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    position: "absolute",
    top: 50,
   left: 150
    
   
    
  },
  producttitle: {

    color: '#5C5758' 
  },
 
  cardo: {
    backgroundColor: '#FEF5F6',
    padding: 15
  
    
  },
  bimage: {
    borderRadius:15
  }
})

export default CatagoryBanner