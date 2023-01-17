import React from "react";
import {StyleSheet,ImageBackground,TouchableOpacity,View,Text} from 'react-native'
import { VStack, HStack, Button, IconButton, Icon, NativeBaseProvider, Center, Box, StatusBar, Container,Input,Image } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";


const CatagoryBanner = (props : {catagory_name : string , img_url : string}) => {
  return (
    <Box marginX='3' height= '75' width='95%' marginBottom='15' >
      {/*<TouchableOpacity>*/}
      <ImageBackground source={{ uri: `https://www.api.octoberecommerce.duckdns.org/${props.img_url}` }}
       imageStyle={{height: 100}}>
        
        <View style={{ width: '100%', height: '100%',textAlign:'center' }}>
        <Text style={styles.headingtitle}>{props.catagory_name}</Text>
       </View>
        
        
            
     
     
      {/*<Image source={{
      uri: "https://wallpaperaccess.com/full/317501.jpg"}} alt="Alternate Text" size='lg' marginRight={5} marginY='3' borderRadius={10}/>*/}
       
        </ImageBackground>
        {/*</TouchableOpacity>*/}
  </Box>
  )
}
const styles = StyleSheet.create({
  headingtitle: {
    
    color: '#A28A90',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 15
    
   
    
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